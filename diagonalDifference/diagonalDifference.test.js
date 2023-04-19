const diagonalDifference = require("./diagonalDifference");

describe("diagonalDifference", () => {
  it("returns the correct absolute difference between the diagonals of the matrix", () => {
    const input = [
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ];

    const expectedOutput = 15;

    const actualOutput = diagonalDifference(input);

    expect(actualOutput).toEqual(expectedOutput);
  });
  it("returns the correct absolute difference between another diagonals of the matrix", () => {
    const input = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ];

    const expectedOutput = 0;

    const actualOutput = diagonalDifference(input);

    expect(actualOutput).toEqual(expectedOutput);
  });

  it("returns the correct absolute difference between diagonals of a larger matrix", () => {
    const input = [
      [6, 6, 7, -10, 9, -3, 8, 9, -1],
      [9, 7, -10, 6, 4, 1, 6, 1, 1],
      [-1, -2, 4, -6, 1, -4, -6, 3, 9],
      [-8, 7, 6, -1, -6, -6, 6, -7, 2],
      [-10, -4, 9, 1, -7, 8, -5, 3, -5],
      [-8, -3, -4, 2, -3, 7, -5, 1, -5],
      [-2, -7, -4, 8, 3, -1, 8, 2, 3],
      [-3, 4, 6, -7, -7, -8, -3, 9, -6],
      [-2, 0, 5, 4, 4, 4, -3, 3, 0],
    ];

    const expectedOutput = 52;

    const actualOutput = diagonalDifference(input);

    expect(actualOutput).toEqual(expectedOutput);
  });
});
