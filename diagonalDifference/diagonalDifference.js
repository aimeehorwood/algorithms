//Given a square matrix,
// calculate the absolute difference between the sums of its diagonals.

const diagonalDifference = (arr) => {
  const right = [];
  const left = [];

  for (let i = 0; i < arr.length; i++) {
    right.push(arr[i][i]);
  }

  for (let j = arr.length - 1; j >= 0; j--) {
    left.push(arr[arr.length - 1 - j][j]);
  }

  const sumLeft = left.reduce((acc, cur) => acc + cur);

  const sumRight = right.reduce((acc, cur) => acc + cur);

  return Math.abs(sumLeft - sumRight);
};

module.exports = diagonalDifference;