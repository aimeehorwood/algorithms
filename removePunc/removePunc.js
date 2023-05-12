const removePunc = (string) => {
  
  const punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  const regex = new RegExp("[" + punctuation + "]", "g");

  const cleanString = string.replace(regex, "");

  return cleanString;
};

module.exports = removePunc;
