const replaceAlphabet = require("./replaceAlphabet");

describe("replaceAlphabet", () => {
  it("replaces one word with its numeric equivalent", () => {
    expect(replaceAlphabet("abc")).toBe("1 2 3");
    expect(replaceAlphabet("def")).toBe("4 5 6");
  });

  it("replaces multiple words", () => {
    expect(replaceAlphabet("The sunset sets at twelve o' clock.")).toBe(
      "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
    );
    expect(replaceAlphabet("The narwhal bacons at midnight.")).toBe(
      "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
    );
  });
});
