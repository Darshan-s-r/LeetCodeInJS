function CanSum(target, numbers){
  let dp = Array(target + 1).fill(false);
  dp[0] = true;
  for(let i = 0; i<dp.length; i++){
    if(dp[i]){
      for(let j = 0; j<numbers.length; j++){
        if(i+numbers[j] < dp.length){
          dp[i+numbers[j]] = true;
        }
      }
    }
  }
  return dp[dp.length-1];
}

console.log(CanSum(5, [2, 3]));
console.log(CanSum(7, [2, 4]));