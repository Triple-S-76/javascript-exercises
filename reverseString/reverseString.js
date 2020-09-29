
const reverseString = function(reverseMe) {
    let array = [];
    let reversed = "";
    let numOfChar = reverseMe.length;

    for (x = 0, y = 1;x < numOfChar; x++, y++){
        array.push(reverseMe.slice(x, y));
    }

    for (x = numOfChar - 1; x >= 0; x--) {
        reversed += array[x];
    }

    return reversed;
    
}

module.exports = reverseString
