const findDigits = require("./findDigits")

describe("findDigits", () => {
    it("when given an integer it can determine whether each digit is a divisor and return count", () => {
        expect(findDigits([12])).toBe(2)
        expect(findDigits([1012])).toBe(3)

    })

})