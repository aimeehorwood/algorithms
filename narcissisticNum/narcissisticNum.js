const narc = (value) => {
    
    const getEachDigit = value.toString().split("")

    
    const powNum = []

    for(let i = 0; i < getEachDigit.length; i++) {
        const num = Number(getEachDigit[i] ** getEachDigit.length)
        powNum.push(num)
    }

    const result = powNum.reduce((acc,cur) => acc + cur)

    if(result != value) {
        return false
    } else {
        return true
    }
}



console.log(narc(1938));
