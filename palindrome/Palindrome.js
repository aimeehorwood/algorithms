//string as argument, return true or false if Palindrome
//ignore spaces, special characters

const isPalindrome = (string) => {
  string = string.toLowerCase();

  const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

  const lettersArray = [];

  //remove all non-letter characters and push into Letters array

  for (let i = 0; i < string.length; i++) {
    if (validCharacters.indexOf(string[i]) > -1) {
      lettersArray.push(string[i]);
    }
  }

  //check for palindrome

  if (lettersArray.join(" ") === lettersArray.reverse().join(" ")) return true;
  else return false;
};

module.exports = isPalindrome;
