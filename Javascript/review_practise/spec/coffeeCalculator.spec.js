const coffeeCalculator = require("../src/coffeeCalculator.js");

describe("CoffeeCalculator", () => {

  test("take an empty array and return 0", () => {
    expect(coffeeCalculator([])).toEqual(0);
  });

  test("takes an array with 'cw' and returns 1", () => {
    expect(coffeeCalculator([ "cw" ])).toEqual(1);
  });

  test("takes an array with 'movie' and returns 1", () => {
    expect(coffeeCalculator([ 'movie' ])).toEqual(1);
  });

});