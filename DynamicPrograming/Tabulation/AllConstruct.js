function allConstruct(target, wordBank){
  let n = target.length;
  let m = wordBank.length;

  let dp = Array(n+1).fill().map(ele => []);
  dp[0] = [[]];

  for(let i = 0; i<n; i++){
    if(dp[i]){
      for(let word of wordBank){
        if(target.slice(i, i+word.length) === word){
          if(i+word.length < dp.length){
            let subResult = dp[i].map(arr=>[...arr, word])
              dp[i+word.length].push(...subResult)
          }
        }
      }
    }
  }
  return dp[dp.length - 1];
}

console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))