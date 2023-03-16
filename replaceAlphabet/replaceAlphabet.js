// replace every letter with its position in the alphabet 

const replaceAlphabet =(sentence) => {
 const letters = sentence.replace(/[^a-zA-Z]/g, "").toLowerCase().split("")
 const output = []
 
 letters.forEach(char => {
    const code = char.charCodeAt(0) - 96
    output.push(code)
 })

 return output.join(" ")

}


module.exports = replaceAlphabet;