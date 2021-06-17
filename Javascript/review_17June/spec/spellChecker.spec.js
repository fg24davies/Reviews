const spellChecker = require("../src/spellChecker");

describe("spellChecker", () => {
  test("it returns 'the' when passed 'the'", () => {
    expect(spellChecker("the")).toEqual("the");
  });

  test("it returns 'fox' when passed 'fox'", () => {
    expect(spellChecker("fox")).toEqual("fox");
  });
});
