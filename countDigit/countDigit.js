const countDigit = (n, d) => {
  let count = 0;

  for (let k = 0; k <= n; k++) {
    const square = k * k;
    const digits = square.toString();
    for (let i = 0; i < digits.length; i++) {
      if (digits[i] === d.toString()) {
        count++;
      }
    }
  }
  return count;
};

module.exports = countDigit;
