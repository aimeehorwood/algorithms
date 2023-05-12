const findUnpairedNum = (array) => {
  const countNum = {};

  array.forEach((num) => {
    if (countNum[num]) {
      countNum[num]++;
    } else {
      countNum[num] = 1;
    }
  });

  let oddKey = null;

  for (let key in countNum) {
    if (countNum[key] % 2 !== 0) {
      oddKey = key;
    }
  }

  return Number(oddKey);
};

module.exports = findUnpairedNum;
