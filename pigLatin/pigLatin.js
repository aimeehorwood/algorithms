//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

const pigLatin = (string) => {
    const words = string.split(" ");
    const pigLatinSentence = [];
  
    words.forEach((word) => {
      const match = word.match(/^[a-zA-Z]+$/);
      if (!match) {
        pigLatinSentence.push(word);
        return;
      }
  
      const firstChar = word.charAt(0);
      const restOfWord = word.slice(1);
      const pigLatinWord = restOfWord + firstChar + "ay";
      pigLatinSentence.push(pigLatinWord);
    });
  
    return pigLatinSentence.join(" ");
  };

module.exports = pigLatin;
