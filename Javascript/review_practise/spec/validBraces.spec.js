const validBraces = require("../src/validBraces");
describe("validBraces", () => {
  it("returns false for (", () => {
    expect(validBraces("(")).toEqual(false);
  });

  it("returns true for ()", () => {
    expect(validBraces("()")).toEqual(true);
  });

  it("returns false for {", () => {
    expect(validBraces("{")).toEqual(false);
  });

  it("returns false for ()(", () => {
    expect(validBraces("()(")).toEqual(false);
  });

  it("returns false for [", () => {
    expect(validBraces("[")).toEqual(false);
  });
});
