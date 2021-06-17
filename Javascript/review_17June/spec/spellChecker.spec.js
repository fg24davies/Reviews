const spellChecker = require("../src/spellChecker");

describe("spellChecker", () => {
  describe("Correctly spelt words", () => {
    test("it returns 'the' when passed 'the'", () => {
      expect(spellChecker("the")).toEqual("the");
    });

    test("it returns 'fox' when passed 'fox'", () => {
      expect(spellChecker("fox")).toEqual("fox");
    });

    test("it returns 'brown' when passed 'brown'", () => {
      expect(spellChecker("brown")).toEqual("brown");
    });
  });

  describe("Incorrect spelt words", () => {
    test("it returns '~teh~' when passed 'teh'", () => {
      expect(spellChecker("teh")).toEqual("~teh~");
    });
  });
});
