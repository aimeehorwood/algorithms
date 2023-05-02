const stringReverse = require("./stringReverse")

describe("String Reversal", () => {
    it("Should reverse string", () => {
     expect(stringReverse("Hello World!")).toBe("!dlroW olleH");
    });
});