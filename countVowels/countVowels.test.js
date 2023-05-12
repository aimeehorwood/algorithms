const countVowels = require ("./countVowels")

describe("countVowels", () => {
    it("counts vowels in a string and returns number", () => {
        expect(countVowels("")).toBe(0)
        expect(countVowels("greek")).toBe(2)
    })
})