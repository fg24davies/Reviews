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

    test("it maintains capitalisation of correctly spelt word", () => {
      expect(spellChecker("tHe")).toEqual("tHe");
    });
  });

  describe("Incorrectly spelt words", () => {
    test("it returns '~teh~' when passed 'teh'", () => {
      expect(spellChecker("teh")).toEqual("~teh~");
    });
  });
});
