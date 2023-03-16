const pigLatin = require("./pigLatin")

describe("pigLatin", () => {
 it("ciphers a single word", () => {
    expect(pigLatin("Hello")).toBe("elloHay")
    expect(pigLatin("world")).toBe("orldway")
 })

 it("ciphers multiple words and ignores exclaimation points ", () => {
    expect(pigLatin("Hello world ! ")).toBe("elloHay orldway ! ")
    expect(pigLatin("Pig latin is cool")).toBe("igPay atinlay siay oolcay")
 })

})
