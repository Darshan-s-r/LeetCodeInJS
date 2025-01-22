function TryFibonacci(n){
  if(n===0 || n===1){
    return 0;
  }
  if(n===2){
    return 1;
  }
  if(n in dp){
    return dp[n];
  }
  let result =  TryFibonacci(n-1, dp) + TryFibonacci(n-2, dp) + TryFibonacci(n-3, dp);
  dp[n] = result
  return result;
}

const dp = {}
console.time("start")
console.log(TryFibonacci(35, dp))
console.timeEnd("start")