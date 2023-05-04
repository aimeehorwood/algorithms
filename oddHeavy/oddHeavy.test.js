const oddHeavy = require("./oddHeavy");

describe("oddHeavy", () => {
  it("returns true when the array is odd heavy and contains atleast one odd element", () => {
    expect(oddHeavy([0, 2, 19, 4, 4])).toBeTruthy();
    expect(oddHeavy([11, 4, 9, 2, 8])).toBeTruthy();
  });

  it("returns false when the array is not odd heavy or the odd and evens are same", () => {
    expect(oddHeavy([1, -2, -1, 2])).toBeFalsy();
    expect(oddHeavy([0, "b", -0, 0])).toBeFalsy();
    expect(oddHeavy([11, 4, 9, 2, 3, 10])).toBeFalsy();
  });
});
