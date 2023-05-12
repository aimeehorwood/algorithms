//return array of top three occuring words

const TopThreeWords = (string) => {
  const stringClean = string.toLowerCase().match(/[a-z]+(?:'[a-z]+)?/g) || [];

  wordCount = {};

  stringClean.forEach((word) => {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  });

  const sortedWords = Object.keys(wordCount).sort(
    (a, b) => wordCount[b] - wordCount[a]
  );

  return sortedWords.slice(0, 3);
};

module.exports = TopThreeWords;
