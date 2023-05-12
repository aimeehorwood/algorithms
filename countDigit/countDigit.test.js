const countDigit = require("./countDigit");

describe("countDigit", () => {
  it("squares all digits between 0 and k and counts the number of digits", () => {
    expect(countDigit(5750, 0)).toBe(4700);
    expect(countDigit(11011, 2)).toBe(9481);
    expect(countDigit(12224, 8)).toBe(7733);
    expect(countDigit(11549, 1)).toBe(11905);
  });
});
