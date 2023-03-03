const reverseArray = require("./reverseArray");

describe("reverseArray", () => {
  it("can reverse array of one number", () => {
    expect(reverseArray([1])).toBe[1];
  });

  it("can reverse array of two numbers", () => {
    expect(reverseArray([1, 2])).toBe[(2, 1)];
  });

  it("can reverse array of three numbers", () => {
    expect(reverseArray([1, 2, 3])).toBe[(3, 2, 1)];
  });

  it("returns nothing when given empty array", () => {
    expect(reverseArray([])).toStrictEqual([]);
  });

  it("can reverse array of numbers that are not consecutive and different sizes", () => {
    expect(
      reverseArray([12, 35, 2, 1, 3499, 171771, 19, 91, 73292882, 4872299191])
    ).toStrictEqual([4872299191, 73292882, 91, 19, 171771, 3499, 1, 2, 35, 12]);
  });
});
