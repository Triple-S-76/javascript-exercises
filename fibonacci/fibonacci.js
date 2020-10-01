const fibonacci = function(x) {

    let num1 = 1;
    let num2 = 1;
    let num3 = 2;
    let numX = '';

    if (x < 1) {
        return 'OOPS';
    } else if ((x == 1) || (x == 2)) {
        return 1;
    } else {
        for (i = 3; i < x; i++) {
            numX = num2 + num3;
            num1 = num2;
            num2 = num3;
            num3 = numX;
        };
    return num3;
    };
}

module.exports = fibonacci
