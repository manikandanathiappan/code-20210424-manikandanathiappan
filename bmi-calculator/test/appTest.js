const expect = require("chai").expect;
const input = require("../assets/inputValue.json");
const app = require("../src/app")

describe("Testing input of BMI application", () => {
  it("Checking whether input data is an array", () => {
    expect(Array.isArray(input)).to.equal(true);
  })

  it("Testing whether input array is not empty", () => {
    expect(input).to.not.be.empty;
  });

  it("Testing height and weight keys are present", () => {
    for (let i = 0; i < input.length; i++) {
      // Checking only height and weight, because they are only used for calculating BMI
      expect(input[i]).to.have.property('HeightCm');
      expect(input[i]).to.have.property('WeightKg');
    }
  });
});
