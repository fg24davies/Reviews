const likes = require("../src/likes");

describe("likes", () => {
  test("no one likes it", () => {
    expect(likes([])).toEqual("no one likes this");
  });
});
