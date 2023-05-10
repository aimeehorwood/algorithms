const multiplicationTable = (size) => {
    let table = [];

    for(let i = 1; i <= size; i++) {
        let x = [];
        for (let j = 1; j <= size; j++) {
            x.push(i*j);
            console.log(i*j)
        }
        table.push(x);
        console.log(x)
    }

    return table;
}



module.exports = multiplicationTable;