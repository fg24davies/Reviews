const likes = require("../src/likes");

describe("likes", () => {
  test("no one likes it", () => {
    expect(likes([])).toEqual("no one likes this");
  });

  test("1 person likes it", () => {
    expect(likes(["Flora"])).toEqual("Flora likes this");
  });

  test("2 people like it", () => {
    expect(likes(["Flora", "Lily"])).toEqual("Flora and Lily like this");
  });
});
