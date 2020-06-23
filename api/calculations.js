function calculateBaslaMetabolicRate(age, height, weight, sex) {
  let basalMetabolicRate;

  if (sex === "Male") {
    basalMetabolicRate = 88.362 + 13.397 * weight + 4.799 * height - 5.67 * age;
  } else if (sex === "Female") {
    basalMetabolicRate = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
  }

  return basalMetabolicRate;
}

module.exports = {
  calculateBaslaMetabolicRate,
};
