function findDigits(n) {
  const convertTo = n.toString();

  const splitting = convertTo.split("");

  let count = 0;

  for (let i = 0; i < convertTo.length; i++) {
    if (n % splitting[i] === 0) {
      count += 1;
    }
  }

  return count;
}

module.exports = findDigits;
