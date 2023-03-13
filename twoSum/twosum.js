//input numArray, sum
//return every pair of numbers from numArray that add up to the sum
//result should be an array of arrays
// any number can be used in multiple pairs

const twoSum = (numArray, sum) => {
  const pairs = [];
  const hashtable = [];

  for (let i = 0; i < numArray.length; i++) {
    const currentNumber = numArray[i];
    const counterpart = sum - currentNumber;

    if (hashtable.indexOf(counterpart) != -1) {
      pairs.push([currentNumber, counterpart]);
    }
    hashtable.push(currentNumber);
  }

  return pairs;
};

module.exports = twoSum;
