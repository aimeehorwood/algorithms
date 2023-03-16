const validatePassword = (password) => {
  const validLength = password.length >= 8;
  const containsLetter = /[a-zA-Z]/g.test(password); //checks for both uppercase and lowercase letters
  const containsNumber = /[0-9]/g.test(password);

  return validLength && containsLetter && containsNumber;
};

module.exports = validatePassword;
