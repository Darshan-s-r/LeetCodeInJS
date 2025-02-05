function canConstruct(target, wordBank){
  let n = wordBank.length;
  let m = target.length;
  let dp = Array(m+1).fill(false);
  dp[0] = true;

  for(let i = 0; i<m; i++){
      if(dp[i]){
        for(let word of wordBank){
          if(target.slice(i, i+word.length) === word){
            if(i + word.length < dp.length){
              dp[i+word.length] = true;
            }
          }

        }
      } 
  }
  return dp[dp.length - 1]
}

console.log(canConstruct('spider', ['sp', 'p', 'id', 'spi','er']));