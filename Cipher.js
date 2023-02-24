//string and number to shift by in alphabet
// every letter by the number that is passed in
// zoo keeper, 2 =>  bbq mggrgt

const caesarCipher = (string, shift) => {
  const lowerString = string.toLowerCase();
  let encryptedChars = [];

  for (let i = 0; i < lowerString.length; i++) {
    let charCode = lowerString.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      charCode += shift;
      while (charCode > 122) {
        charCode = charCode - 122 + 96;
      }
    }
    encryptedChars.push(String.fromCharCode(charCode));
  }

  return encryptedChars.join("");
};

module.exports = caesarCipher;
