//VM  find Largest sum contiguous Subarray [V. IMP]

function  maxSubarraySum(arr) {
  let maxAtPoint = arr[0];
  let maxSoFor = arr[0];
  for(let i = 1;i<arr.length; i++){
      maxAtPoint = Math.max(arr[i], maxAtPoint + arr[i]);
      maxSoFor = Math.max(maxAtPoint, maxSoFor);
  }
  return maxSoFor;
}

console.log(maxSubarraySum([1, -2, 3, 4, -1, 2, 1, -5, 4])); // Output: 9
console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
console.log(maxSubarraySum([-2, -3, -1, -5])); //-1


