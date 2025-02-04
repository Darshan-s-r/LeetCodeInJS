function Fib(n){
  let dp = Array(n+1).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  if(n <= 1){
      return dp[n]
  }
  for(let i = 2; i<=n; i++){
      dp[i] = dp[i-1] + dp[i-2];
  }
  return dp[n]
}