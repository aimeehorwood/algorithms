const removePunc = require ("./removePunc")

describe("removePunc", () => {
    it("removes all punctuation from a string", () => {
      const string = "h@!*i";
      const result = removePunc(string);
      expect(result).toEqual("hi");
    });
  
    it("handles empty string", () => {
      const string = "";
      const result = removePunc(string);
      expect(result).toEqual("");
    });
  
    it("handles string with no punctuation", () => {
      const string = "hello world";
      const result = removePunc(string);
      expect(result).toEqual("hello world");
    });
  
    it("handles string with only punctuation", () => {
      const string = "!@#$%^&*()";
      const result = removePunc(string);
      expect(result).toEqual("");
    });
  
    it("handles string with mixed punctuation and alphanumeric characters", () => {
      const string = "h@l!o w#r$l%d^";
      const result = removePunc(string);
      expect(result).toEqual("hlo wrld");
    });
  });
  