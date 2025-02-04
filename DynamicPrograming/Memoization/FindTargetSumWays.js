function findTargetSumWays(N, arr, target) {
  // code here
return helper(0, 0, N, arr, target);
}

function helper(i, s, N, arr, target){
  if(i === N){
      return s === target ? 1 : 0;
  }

  return helper(i+1, s + arr[i], N, arr, target) + helper(i+1, s-arr[i], N, arr, target)

}

let arr = [1, 1, 1, 1, 1]
console.log(findTargetSumWays(arr.length, arr, 3))