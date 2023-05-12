const consecStrings = require("./consecutiveStrings")

describe("consecutiveStrings", () => {
    it("returns the longest consecutive strings concatenated by k", () => {
        expect(consecStrings(["zone", "abigail", "theta", "form", "libe", "zas"], 2)).toStrictEqual("abigailtheta")
    })
})