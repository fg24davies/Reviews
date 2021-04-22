const coffeeCalculator = require("../src/coffeeCalculator.js");

describe("CoffeeCalculator", () => {
  test("take an empty array and return 0", () => {
    expect(coffeeCalculator([])).toEqual(0);
  });
});