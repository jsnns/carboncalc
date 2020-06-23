// ## Libraries
import React, { useEffect, useState } from "react";
import axios from "axios";

// ## Types and Config
import { EmissionsData, FoodSource, Sex } from "./types";
import { CONNECTION_URI } from "./config";

// ## Components
import { Input, Select } from "antd";
import { EmissionsDisplay } from "./components/EmissionsDisplay";
import { Spacer } from "./components/Spacer";

// ## Styles
import "./App.css";
import "antd/dist/antd.css";

const { Option } = Select;

const App: React.FC = () => {
  const [distance, setDistance] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(0);
  const [age, setAge] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [sex, setSex] = useState<Sex>("Female");
  const [foodSource, setFoodSource] = useState<FoodSource>("Red Meat");
  const [emissions, setEmissions] = useState<EmissionsData | null>(null);

  // called every time the form data is updated, throttling should be implemented
  // memoization would likely have little effect
  useEffect(() => {
    axios
      .post(CONNECTION_URI, {
        distance,
        speed,
        age,
        weight,
        height,
        sex,
        foodSource,
      })
      .then((response) => {
        setEmissions(response.data);
      });
  }, [distance, speed, age, weight, height, sex, foodSource]);

  return (
    <div className="App">
      <h1>Biking vs Driving CO2 Emissions</h1>
      <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
        Distance (km)
        <Input
          placeholder="Distance"
          onChange={(e) => setDistance(Number(e.target.value))}
          value={distance}
        />
        <Spacer />
        Speed (km/h)
        <Input
          placeholder="Speed"
          onChange={(e) => setSpeed(Number(e.target.value))}
          value={speed}
        />
        <Spacer />
        Age
        <Input
          placeholder="Age"
          onChange={(e) => setAge(Number(e.target.value))}
          value={age}
        />
        <Spacer />
        Weight (kg)
        <Input
          placeholder="Weight"
          onChange={(e) => setWeight(Number(e.target.value))}
          value={weight}
        />
        <Spacer />
        Height (cm)
        <Input
          placeholder="Height"
          onChange={(e) => setHeight(Number(e.target.value))}
          value={height}
        />
        <Spacer />
        Sex
        <Select
          placeholder="Sex"
          onChange={(value: Sex) => setSex(value)}
          value={sex}
        >
          <Option value="Male">Male</Option>
          <Option value="Female">Female</Option>
        </Select>
        <Spacer />
        Primary Food Source
        <Select
          placeholder="Choose Primary Food Source"
          onChange={(value: FoodSource) => setFoodSource(value)}
          value={foodSource}
        >
          <Option value="Red Meat">Red Meat</Option>
          <Option value="White Meat">White Meat</Option>
          <Option value="Dairy">Dairy</Option>
          <Option value="Rice">Rice</Option>
        </Select>
        <Spacer />
        <EmissionsDisplay emissions={emissions} />
      </div>
    </div>
  );
};

export default App;
