const Guess = require("../src/guessClass.js");

describe("Guessing", () => {
  let guesser = new Guess(10, 3);
  test("it should start new game with a number and number of lives", () => {
    expect(guesser.lives).toEqual(3);
    expect(guesser.number).toEqual(10);
  })

  test("it should return true if correct number guessed ", () => {
    expect(guesser.guess(10)).toEqual(true);
  });

  test("it should return false if the wrong number guessed", () => {
    expect(guesser.guess(5)).toEqual(false);
  });

  test("lives should go down by 1 if number guessed wrong", () => {
    let guesser = new Guess(10, 3);
    guesser.guess(5);
    expect(guesser.lives).toEqual(2);
  });

  // test("it should throw an error if number of lives exceeded", () => {
  //   let guesser = new Guess(10, 3);
  //   guesser.guess(1);
  //   guesser.guess(8);
  //   expect(guesser.guess(10)).toThrow(Error);
  // });

});