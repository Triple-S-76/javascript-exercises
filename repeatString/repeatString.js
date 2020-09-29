
const repeatString = function(word, num) {
    if (num < 0) return "ERROR"
    let phrase = ""
    for (let count = 0;count < num; count++) {
        phrase += word
    }
        return phrase
}

module.exports = repeatString
