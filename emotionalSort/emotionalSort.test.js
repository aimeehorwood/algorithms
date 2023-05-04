const emotionalSort = require ("./emotionalSort")

describe("emotional sort", () => {
    it("when the order is true, it can sort the emotions from super happy to super sad", () => {
        expect(emotionalSort([':D', ':|', ':)', ':('], true)).toStrictEqual([ ':D', ':)', ':|', ':(' ]);
    })

    it("when the order is false, it can sort the emotions from super sad to super happy", () => {
        expect(emotionalSort([':D', ':|', ':)', ':('], false)).toStrictEqual([ ':(', ':|', ':)', ':D' ]);
    })

    it("it can sort the emotions even if there are duplicates", () => {
        expect(emotionalSort([':D', ':|', ':)', ':(', ':D'], true)).toStrictEqual([ ':D', ':D', ':)', ':|', ':(' ]);
    })

    it("it can sort the emotions even if there are multiple duplicates", () => {
        expect(emotionalSort([':D', ':|', ':)', ':(', ':D', ':D', ':|'], true)).toStrictEqual([ ':D', ':D', ':D', ':)', ':|', ':|',':(']);
    })
})
