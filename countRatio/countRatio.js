//Given an array of integers,
//calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr) {
  const size = arr.length;
  let positive = 0;
  let negative = 0;
  let zeros = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros += 1;
    } else if (arr[i] > 0 && arr[i] != 0) {
      positive += 1;
    } else {
      negative += 1;
    }
  }

  const calculatePos = (positive / size).toFixed(6);

  const calculateNeg = (negative / size).toFixed(6);

  const calculateZero = (zeros / size).toFixed(6);

  console.log(calculatePos);
  console.log(calculateNeg);
  console.log(calculateZero);
}
