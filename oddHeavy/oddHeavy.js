const oddHeavy = (numbers) => {
  const oddCount = [];
  const evenCount = [];

  if (numbers.length === 0) {
    return false;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      evenCount.push(numbers[i]);
    } else if (numbers[i] === 0) {
      evenCount.push(numbers[i]);
    } else {
      oddCount.push(numbers[i]);
    }
  }

  if (oddCount.length === 0) {
    return false;
  }

  const maxEven = Math.max(...evenCount);
  const minOdd = Math.min(...oddCount);

  return maxEven < minOdd;
};

module.exports = oddHeavy;
