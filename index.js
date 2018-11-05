function flatten(inputArray) {
    let flattenedArray = [];
    inputArray.forEach(item => {
        if (Array.isArray(item)) {
            /**
             * If item is an array,
             * recursively flatten and merge array into flattenedArray using spread operator
             */

            flattenedArray = [...flattenedArray, ...[].concat(...flatten(item))];
        } else {
            /**
             * If item is not an array, just push it
             */
            flattenedArray.push(item);
        }
    });
    return flattenedArray;
}

module.exports = flatten;
