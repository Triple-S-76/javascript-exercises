function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function sum () {
	let x = arguments[0].length;
    let y = 0;
    let result = 0;
    for (;x > y;y++) {
        result += arguments[0][y];
    }
    return result;	
}

function multiply () {
	let x = arguments[0].length;
	let y = 1;
	let result = arguments[0][0];
	for (;x > y;y++) {
		result *= arguments[0][y];
	}
	return result;
}

function power(x, y) {
	let result = x;
	for (;y > 1; y--) {
        result *= x;
    };
    return result;
}

function factorial(x) {
	let result = x;
    for (x--; x > 0; x--) {
        result *= x;
    }
    if (result != 0) {
        return result;
    } else {
        return 1;
    }	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}