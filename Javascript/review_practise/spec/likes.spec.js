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

  test("3 people like it", () => {
    expect(likes(["Flora", "Lily", "Ella"])).toEqual(
      "Flora, Lily and Ella like this"
    );
  });

  test("more than 3 people like it", () => {
    expect(likes(["Flora", "Lily", "Ella", "Lucy", "Jack"])).toEqual(
      "Flora, Lily and 3 others like this"
    );
  });
});
