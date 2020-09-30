const caesar = function(x, y) {
    let shiftNumber = y;
    let code = '';
    let character = '';
    let caesar = '';
    
    if ((shiftNumber < -26) || (shiftNumber > 26)) {
        shiftNumber = shiftNumber % 26;
    }

    for (i = 0; i < x.length; i++) {
        code = x.charCodeAt(i);
        
        if ((code >= 65) && (code <= 90)) {
            code = code + shiftNumber;
            if (code < 65) {code = code + 26};
            if (code > 90) {code = code - 26};
            character = String.fromCharCode(code);
        } else if ((code >= 97) && (code <= 122)) {
            code = code + shiftNumber;
            if (code < 97) {code = code + 26};
            if (code > 122) {code = code - 26};
            character = String.fromCharCode(code);
        } else {
            character = String.fromCharCode(code);
        }
        caesar += character;
    }
    return caesar
}

module.exports = caesar
