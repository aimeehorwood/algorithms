const twoSum = require("./twosum");

describe("twoSum", () => {
  it("returns an empty array when given an empty array", () => {
    expect(twoSum([], 10)).toEqual([]);
  });

  it("returns an empty array when no pairs add up to the sum", () => {
    expect(twoSum([1, 2, 3, 4], 0)).toEqual([]);
  });

  it("returns one pair when there is only one pair that adds up to the sum", () => {
    expect(twoSum([1, 2, 3, 4, 5], 9)).toEqual([[5, 4]]);
  });

  it("returns multiple pairs when there are multiple pairs that add up to the sum", () => {
    expect(twoSum([1, 2, 3, 4, 5], 7)).toEqual([[4, 3],[5, 2]]);
  });

  it("handles repeated numbers correctly", () => {
    expect(twoSum([1, 2, 2, 3, 4, 5], 4)).toEqual([[2, 2], [3, 1]]);
  });
});
