const TopThreeWords = require ("./topThreeWords")

describe("TopThreeWords", () => {
    it("returns an array of top three occurring words in a string", () => {
      const string = "the rain spain plain jane mane rain spain lane the";
      const result = TopThreeWords(string);
      expect(result).toEqual(["the", "rain", "spain"]);
    });
  
    it("ignores case when counting words", () => {
      const string = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e";
      const result = TopThreeWords(string);
      expect(result).toEqual(["e", "ddd", "aa"]);
    });
  
    it("handles empty string", () => {
      const string = "";
      const result = TopThreeWords(string);
      expect(result).toEqual([]);
    });
  
    it("handles string with only whitespace", () => {
      const string = "     ";
      const result = TopThreeWords(string);
      expect(result).toEqual([]);
    });
  
    it("handles string with no word characters", () => {
      const string = "!@#$%^&*()";
      const result = TopThreeWords(string);
      expect(result).toEqual([]);
    });
  
    it("handles string with repeated apostrophes", () => {
      const string = "      //wont won't won't";
      const result = TopThreeWords(string);
      expect(result).toEqual(["won't", "wont"]);
    });
  });
  