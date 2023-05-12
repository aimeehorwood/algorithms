const countVowels = (string) => {
  const vowels = "aeiou";

  let count = 0;

  if (string.length == 0) {
    return count;
  }

  for (let i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) !== -1) {
      count++;
    }
  }

  return count;
};

module.exports = countVowels;
