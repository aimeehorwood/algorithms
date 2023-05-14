const removeConsecDup = (string) => {

    const sepWords = string.split(" ")

    const resultsArray = []

    for(let i = 0; i < sepWords.length; i++) {
        let word = sepWords[i]

        if(sepWords[i] != sepWords[i + 1]) {
            resultsArray.push(word)
        }


    }

    return resultsArray

}


console.log(removeConsecDup("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"))