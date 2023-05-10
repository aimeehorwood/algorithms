const multiplicationTable = require ("./multiplicationtable")

describe("mulitplication table", () => {
    it("returns three times table when given size 3", () => {
        expect(multiplicationTable(3)).toStrictEqual([[1,2,3],[2,4,6],[3,6,9]])
        expect(multiplicationTable(4)).toStrictEqual([[1,2,3,4],[2,4,6,8],[3,6,9,12],[ 4, 8, 12, 16 ]])
        expect(multiplicationTable(5)).toStrictEqual([[1,2,3,4,5],[2,4,6,8,10],[3,6,9,12,15],[ 4, 8, 12, 16,20 ],[5, 10, 15, 20,25]])
    })
})