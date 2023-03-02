//string as param
//reverse every word in that string
// return new string
// without using array reverse method

const reverseWords = (string) => {
  const words = string.split(" ");
  const reversedSentence = [];

  words.forEach((word) => {
    let reversedWord = "";
    // loop backwards, decrement
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reversedSentence.push(reversedWord);
  });

  return reversedSentence.join(" ");
};

module.exports = reverseWords;
