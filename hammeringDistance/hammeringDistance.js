const hammeringDistance = (str1, str2) => {
  if (str1.length !== str2.length) {
    throw new Error("strings must be of equal length");
  }

  let distance = 0;
  for (let i = 0; i < str2.length; i++) {
    if (str1[i] !== str2[i]) {
      distance += 1;
    }
  }

  return distance;
};

module.exports = hammeringDistance;
