
exports.min = function min(array) {
    // if (array === [] || array.length === 0 || array === '') {
    //     return 0;
    // }

    if (array) {
        let arr = (array),
        minNum = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (minNum > arr[i]) {
                minNum = arr[i];
            }
        }
    return minNum;
    }

    return 0;
}

exports.max = function max(array) {
    if (array.length === 0 || array === [] || array === '') {
        return 0;
    }

    let arr = array,
    maxNum = array[0];

    for (let i = 0; i < arr.length; i++) {
        if (maxNum < arr[i]) {
            maxNum = arr[i];
        }
    }

    return maxNum;
}

exports.avg = function avg(array) {
    if (array !== [] || array !== '' || array !== undefined) {
        let arr = array.slice(),
        sum = arr.reduce((a, b) => a + b);

        return sum / arr.length;
    }

        return 0;

}
