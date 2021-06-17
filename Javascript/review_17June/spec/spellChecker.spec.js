const spellChecker = require("../src/spellChecker");

describe("spellChecker", () => {
  test("it returns 'the' when passed 'the'", () => {
    expect(spellChecker("the")).toEqual("the");
  });
});
