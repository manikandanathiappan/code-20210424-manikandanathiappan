// Importing data
let inputData = require("../assets/inputValue.json");

class BMICalculator {
  bmiCalculation(jsonValue) {
    for (let i = 0; i < jsonValue.length; i++) {
      let weight = jsonValue[i]["WeightKg"];
      let height = Math.pow(jsonValue[i]["HeightCm"]/100,2);
      // Adding BMI, BMI category, Health risk values to existing array
      jsonValue[i]["BMI"] = Math.round((weight/height) * 10) / 10;
      let categoryAndHealthRisk = this.fetchCategoryAndHealthRisk(jsonValue[i]["BMI"]);
      jsonValue[i].Category = categoryAndHealthRisk["category"];
      jsonValue[i].HealthRisk = categoryAndHealthRisk["risk"];
    }
    console.table(jsonValue);
    console.log("");
    this.displayOverallStatus(jsonValue);
  }

  fetchCategoryAndHealthRisk(bmiValue) {
    let category, risk;
    if (bmiValue <= 18.4) {
      category = "Underweight";
      risk = "Malnutrition risk";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      category = "Normal weight";
      risk = "Low risk";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      category = "Overweight";
      risk = "Enhanced risk";
    } else if (bmiValue >= 30 && bmiValue <= 34.9) {
      category = "Moderately obese";
      risk = "Medium risk";
    } else if (bmiValue >= 35 && bmiValue <= 39.9) {
      category = "Severely obese";
      risk = "High risk";
    } else if (bmiValue >= 40) {
      category = "Very severely obese";
      risk = "Very high risk";
    }
    return {"category": category, "risk": risk};
  }

  displayOverallStatus(jsonValue) {
    let underWeightPeople = 0, normalWeightPeople = 0, overWeightPeople = 0;
    for (let j = 0; j < jsonValue.length; j++) {
      if (jsonValue[j]["BMI"] <=18.4) {
        underWeightPeople++;
      } else if (jsonValue[j]["BMI"] >= 18.5 && jsonValue[j]["BMI"] <= 24.9) {
        normalWeightPeople++;
      } else if (jsonValue[j]["BMI"] >= 25) {
        overWeightPeople++;
      }
    }
    // Condition added to display only if the number is non-zero
    underWeightPeople ? console.log(`Total number of Under Weight people -> ${underWeightPeople}`) : ""
    normalWeightPeople ? console.log(`Total number of Normal Weight people -> ${normalWeightPeople}`) : ""
    overWeightPeople ? console.log(`Total number of Over Weight people -> ${overWeightPeople}`) : ""
  }
}

calculateBMI = new BMICalculator;
calculateBMI.bmiCalculation(inputData);
