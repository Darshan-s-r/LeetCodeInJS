// Minimise the maximum difference between heights [V.IMP]

function getMinDiff(arr, n, k) {
    arr.sort((a, b)=>a - b);
    let ans = arr[n-1] - arr[0];
    let smallest = arr[0] + k;
    let largest = arr[n-1] - k;

    let min, max;
    for(let i = 0;i<n-1; i++){
        min = Math.min(smallest, arr[i+1] - k);
        max = Math.max(largest, arr[i] + k);
        if(min<0){
          continue;
        }
        ans = Math.min(ans, max - min);
        console.log(ans)
    }
    console.log(ans)
    return ans;
}

let arr = [12, 5, 8, 11, 8, 10]
console.log(getMinDiff(arr, arr.length, 2))
