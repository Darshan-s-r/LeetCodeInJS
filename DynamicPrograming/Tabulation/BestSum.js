function HowSum(target, numbers){
  let n = numbers.length;
  let dp = Array(target+1).fill(null);
  dp[0] = [];

  for(let i = 0; i<dp.length; i++){
    if(Array.isArray(dp[i])){
      for(let j = 0; j<n; j++){
        if(i+numbers[j] < dp.length){
          let future = dp[i+numbers[j]]
          if(Array.isArray(future)){
          let current = [...dp[i], numbers[j]]
          if(current.length < future.length){
            dp[i+numbers[j]] = [...dp[i], numbers[j]]
          }
        }else{
          dp[i+numbers[j]] = [...dp[i], numbers[j]]
        }
          
        }
      }
    }
  }
  return dp[dp.length - 1]
}

console.log(HowSum(5, [2, 3]));
console.log(HowSum(7, [2, 4]));
console.log(HowSum(7, [5, 3,1, 1, 1, 4,1, 1, 7]));