
exports.min = function min(array) {
    if (array == undefined || array.length == 0) {
        return 0;
    }

    let arr = array.slice(),
    minNum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (minNum > arr[i]) {
            minNum = arr[i];
        }
    }
    return minNum;

}

exports.max = function max(array) {
    if (array == undefined || array.length == 0) {
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
    if (array == undefined || array.length == 0) {
        return 0;
    }

    return array.reduce((a, b) => a + b) / array.length;
}
