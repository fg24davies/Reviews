const validBraces = require("../src/validBraces");
describe("validBraces", () => {
  it("returns false for (", () => {
    expect(validBraces("(")).toEqual(false);
  });
});
