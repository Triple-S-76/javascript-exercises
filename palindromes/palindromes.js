const palindromes = function(x) {
    let forwardsLowerCase = x.toLowerCase();
    let forwards = '';
    let backwards = '';
    let character = '';
    let length = x.length;
    
    
    for (y = 0, z = 1;y < length; y++, z++) {
        character = forwardsLowerCase.slice(y,z);
        if (/[a-z]/.test(character)) {
            forwards += character;
        }
    };
    for (y = forwards.length - 1, z = forwards.length; y >= 0; y--, z--) {
        character = forwards.slice(y, z);
        backwards += character;
    }
    if (forwards == backwards) {
        return true;
    } else {
        return false;
    }
}

module.exports = palindromes
