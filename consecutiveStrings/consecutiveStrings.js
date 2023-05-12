const consecStrings = (string,k) => {

const stringLength = string.length;

if (stringLength === 0 || k > stringLength || k <= 0) {
    return ""
}

let longest = "";

//  string.length - k + 1  ensures we dont go beyond array
for (let i = 0; i < stringLength - k + 1; i++) {
    const current = string.slice(i, i + k).join("")
    if(current.length > longest.length) {
        longest = current
    }
}

    return longest

}

module.exports = consecStrings;