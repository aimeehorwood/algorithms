// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

const hashtag = (sentence) => {
  const noSpaces = sentence.split(" ");

  for (let i = 0; i < noSpaces.length; i++) {
    noSpaces[i] = noSpaces[i].charAt(0).toUpperCase() + noSpaces[i].slice(1);
  }

  const capitalisedString = noSpaces.join("");

  if (capitalisedString.length >= 140 || capitalisedString.length === 0) {
    return false;
  } else {
    return `#${capitalisedString}`;
  }
};


module.exports = hashtag;