const express = require("express");
const cors = require("cors");
const app = express();
const { CO2PerCalorie } = require("./foodIntensities");
const calc = require("./calculations");
const port = 8000; // default port to listen

app.use(express.json());
app.use(cors());

// memoizing could have a major impact here
// to tradeoff memory for computation it's possible to precompute all discrete results for BMR
// cacheing would be rather easy for BMR (most frequently used) initial value— occurance in earth's population
app.post("/calc/transport", (req, res) => {
  let { height, weight, age, sex, distance, speed, foodSource } = req.body;
  const carEmissions = distance * 37; // 37g/km

  const basalMetabolicRate = calc.calculateBaslaMetabolicRate(
    age,
    height,
    weight,
    sex
  );

  const calories = ((basalMetabolicRate * 6.8) / 24) * (distance / speed);
  const bikeEmission = (calories | 0) * CO2PerCalorie[foodSource];

  res
    .json({
      car: carEmissions,
      bike: bikeEmission,
    })
    .send();
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
