const isPalindrome = require("./Palindrome");

describe("isPalindrome", () => {
  it("returns true if its a palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false if its not a palindrome", () => {
    expect(isPalindrome("racecard")).toBe(false);
  });

  it("ignores capital letters", () => {
    expect(isPalindrome("mOm")).toBe(true);
  });

  it("returns true when given an empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("returns true if its a palindrome that has spaces", () => {
    expect(isPalindrome("Madam Madam")).toBe(true);
  });

  it("ignores spaces and special characters", () => {
    expect(isPalindrome("Madam I,*m Adam")).toBe(true);
  });

});
