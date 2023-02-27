const caesarCipher = require("./Cipher");

describe("caesarCipher", () => {
  it("encrypts a lowercase string correctly", () => {
    expect(caesarCipher("hello", 3)).toBe("khoor");
  });

  it("encrypts an uppercase string correctly", () => {
    expect(caesarCipher("WORLD", 5)).toBe("btwqi");
  });

  it("encrypts a mixed-case string correctly", () => {
    expect(caesarCipher("HeLLo, WoRlD!", 7)).toBe("olssv, dvysk!");
  });

  it("handles shifts greater than 26 correctly", () => {
    expect(caesarCipher("hello", 29)).toBe("khoor");
  });

  it("handles shifts less than 0 correctly", () => {
    expect(caesarCipher("hello", -2)).toBe("fcjjm");
  });

  it("does not modify non-alphabetic characters", () => {
    expect(caesarCipher("hello, world!", 7)).toBe("olssv, dvysk!");
  });
});
