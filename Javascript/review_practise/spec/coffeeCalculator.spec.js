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

  test("takes an array with 'dog' and returns 1", () => {
    expect(coffeeCalculator([ 'dog' ])).toEqual(1);
  });

  test("takes an array with 'cat' and returns 1", () => {
    expect(coffeeCalculator([ 'cat' ])).toEqual(1);
  });

  test("takes an array with a tasks thats not dog, cat, movie or cw and ignores it", () => {
    expect(coffeeCalculator([ "cw-more"] )).toEqual(0);
  });

  test("takes an array with task in capital letters and returns 2", () => {
    expect(coffeeCalculator( ["CW"] )).toEqual(2);
  });

  test("takes an array with 2 tasks both lowercase and returns 2", () => {
    expect(coffeeCalculator([ "cat", "dog" ])).toEqual(2);
  });

});