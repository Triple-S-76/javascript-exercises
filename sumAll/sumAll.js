const sumAll = function(start, end) {
    let finalSum = 0;
    let highNumber;
    let lowNumber;

    if ((Number.isInteger(start) && Number.isInteger(end)) &&
        (start > 0 && end > 0)) {
            
        if (start < end) {
                lowNumber = start;
                highNumber = end;
        } else {
                lowNumber = end;
                highNumber = start;
        }

        for (; lowNumber <= highNumber; lowNumber++) {
                finalSum += lowNumber;
        }
        return finalSum;
    }
    return "ERROR";
}

module.exports = sumAll
