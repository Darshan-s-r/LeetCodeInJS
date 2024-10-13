function findStepKeyIndex(arr, k, x) {
    let n = arr.length;
    let i = 0;

    // Traverse the array
    while (i < n) {
        if (arr[i] === x) {
            return i;
        }
        let step = Math.ceil(Math.abs(arr[i] - x) / k);
        i += step;  // Move forward by the calculated step
    }

    return -1;
}

// Example usage
let arr = [4, 5, 6, 7, 6];
let k = 1;
let x = 6;
console.log(findStepKeyIndex(arr, k, x));  // Output: 5
