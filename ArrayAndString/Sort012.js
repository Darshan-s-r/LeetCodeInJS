let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];

sort012(arr, arr.length);

console.log(arr);

function sort012(arr, N)
{
    let low = 0, mid = 0, high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            [arr[high], arr[mid]] = [arr[mid], arr[high]];
            high--;
        }
    }
}