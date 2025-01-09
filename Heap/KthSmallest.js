function kthSmallest(arr, k) {
  // code here
  arr.sort((a, b)=>a - b);
  return arr[k-1];
}

let arr = [7, 10, 4, 3, 20, 15]
let k = 3
console.log(kthSmallest(arr, k))