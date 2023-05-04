const firstNonRepeating = (str) => {
  const stringSplit = str.split("");

  const charCount = {};

  stringSplit.forEach((char) => {
    const lowerChar = char.toLowerCase();
    if (charCount[lowerChar]) {
      charCount[lowerChar]++;
    } else {
      charCount[lowerChar] = 1;
    }
  });

  for (let i = 0; i < stringSplit.length; i++) {
    const char = stringSplit[i];
    const lowerChar = char.toLowerCase();
    if (charCount[lowerChar] === 1) {
      return char;
    }
  }

  return "";
};

module.exports = firstNonRepeating;
