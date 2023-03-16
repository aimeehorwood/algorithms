const validatePassword = require("./validatePassword");

it("returns false given an empty string", () => {
  expect(validatePassword("")).toBe(false);
});

it("returns true given a password 8 characters or longer, a letter, and a number", () => {
  expect(validatePassword("1234567a")).toBe(true);
  expect(validatePassword("1234567A")).toBe(true);
  expect(validatePassword("123456aA")).toBe(true);
});

it("returns false given a password that is 8 characters long, but no letters", () => {
  expect(validatePassword("12345678")).toBe(false);
});

it("returns false given a password that is 8 characters long, but has no numbers", () => {
  expect(validatePassword("abcdefgh")).toBe(false);
});

it("returns false given a password that is 8 characters long, but has no numbers", () => {
  expect(validatePassword("ABCDEFGH")).toBe(false);
});

it("returns false given a password that contains letters and numbers but not 8 characters", () => {
  expect(validatePassword("a1")).toBe(false);
});

it("returns true for password with numbers, uppercase and lowercase letters, and >= 8 characters", () => {
  expect(validatePassword("12512ASDasdfasd")).toBe(true);
});

it("returns true for password with numbers, uppercase letters, and >= 8 characters", () => {
  expect(validatePassword("12512ASDFA")).toBe(true);
});
