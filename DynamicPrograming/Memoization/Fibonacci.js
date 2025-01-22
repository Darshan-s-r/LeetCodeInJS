function fibonacci(n, dp){
  if(n===0){
    return 0;
  }
  if(n===1){
    return 1;
  }
  if(n in dp){
    return dp[n];
  }
  let result =  fibonacci(n-1, dp) + fibonacci(n-2, dp);
  dp[n] = result
  return result;
}

const dp = {}
console.time("start")
console.log(fibonacci(35, dp))
console.timeEnd("start")