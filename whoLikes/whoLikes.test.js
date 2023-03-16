const whoLikes = require("./whoLikes");

describe("whoLikes", () => {
  test("it should return one persons name when only one person has liked", () => {
    expect(whoLikes(["Peter"])).toBe("Peter likes this");
    expect(whoLikes(["Sally"])).toBe("Sally likes this");
    expect(whoLikes(["Bob"])).toBe("Bob likes this");
  });

  test("it should return two peoples names when two people have liked", () => {
    expect(whoLikes(["Jacob", "Alex"])).toBe("Jacob and Alex like this");
    expect(whoLikes(["Sally", "Bob"])).toBe("Sally and Bob like this");
  });

  test("it should return three peoples names when three people have liked", () => {
    expect(whoLikes(["Jacob", "Alex", "John"])).toBe(
      "Jacob, Alex and John like this"
    );
    expect(whoLikes(["Sally", "Peter", "Bob"])).toBe(
      "Sally, Peter and Bob like this"
    );
  });

  test("it should return three peoples name and a count of others when three or more have liked", () => {
    expect(whoLikes(["Alex", "Jacob", "Mark", "Max"])).toBe(
      "Alex, Jacob and 2 others like this"
    );
    expect(whoLikes(["Alex", "Jacob", "Mark", "Max", "Steve"])).toBe(
      "Alex, Jacob and 3 others like this"
    );
  });
});
