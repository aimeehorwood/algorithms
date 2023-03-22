const hashtag = require("./hashtag");

it("puts a hashtag at the front of a single word", () => {
  expect(hashtag("Hello")).toBe("#Hello");
  expect(hashtag("Mellow")).toBe("#Mellow");
});

it("puts a hashtag at the front of a sentence with two words and removes spaces", () => {
  expect(hashtag("Hello World")).toBe("#HelloWorld");
  expect(hashtag("Hello Car")).toBe("#HelloCar");
  expect(hashtag("    Hello     World   ")).toBe("#HelloWorld");
});

it("puts a hashtag and can capitalise the first letter of each word", () => {
  expect(hashtag("hello world")).toBe("#HelloWorld");
  expect(hashtag("hello how are you")).toBe("#HelloHowAreYou");
});

it("returns false when given an empty string", () => {
  expect(hashtag("")).toBeFalsy();
});

it("returns false when given a string of over 140 chars", () => {
  expect(
    hashtag(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    )
  ).toBeFalsy();
});
