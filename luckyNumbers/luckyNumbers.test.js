const luckyNumbers = require("./luckyNumbers");

describe("luckyNumbers", () => {
  it("returns true if the number is lucky", () => {
    expect(luckyNumbers("813372")).toBeTruthy();
    expect(luckyNumbers("003111")).toBeTruthy();
    expect(luckyNumbers("56328116")).toBeTruthy();
    expect(luckyNumbers("683179")).toBeTruthy();
  });

  it("should throw an error when given an empty string", () => {
    expect(() => {
      luckyNumbers("");
    }).toThrow("invalid input");
  });

  it("should throw an error when given invalid characters such as numbers", () => {
    expect(() => {
      luckyNumbers("6F43E8");
    }).toThrow("invalid input");
  });

  it("returns false if the number is unlucky", () => {
    expect(luckyNumbers("683000")).toBeFalsy();
  });

  it("ignores middle number for odd numbers", () => {
    expect(luckyNumbers("17935")).toBeTruthy();
  });
});
