//note as string, magazine as string
// do we have enough words in our magazine to create our note?
// return true or false

const harmlessRansomNote = (noteText, magazineText) => {
  let noteArr = noteText.split(" ");
  let magazineArr = magazineText.split(" ");

  let magazineObj = {};

  //goes through array and checks if word exists, if it doesn't it initalizies the key with a value of 0 and then increments by 1
  magazineArr.forEach((word) => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  let noteisPossible = true;

  // goes through each word in notes Array and checks if it exists as a key in the magazine object, if it does, it decrements the value by 1, which means it has been used, if more than once its zero which means used more times than needed so not possible
  noteArr.forEach((word) => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteisPossible = false;
    } else noteisPossible = false;
  });

  return noteisPossible;
};

module.exports = harmlessRansomNote;
