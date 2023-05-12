const findUnpairedNum = require("./findUnpairedNum");

describe("findUnpairedNum", () => {
  it("returns the unpaired number in an array of integers", () => {
    const array = [1, 2, 1, 3, 2];
    const result = findUnpairedNum(array);
    expect(result).toEqual(3);
  });

  it("handles array with only one element", () => {
    const array = [1];
    const result = findUnpairedNum(array);
    expect(result).toEqual(1);
  });
 
  it("handles array with non-integer elements", () => {
    const array = [1, 2, 2.5, 3, 1];
    const result = findUnpairedNum(array);
    expect(result).toEqual(2.5);
  });
});
