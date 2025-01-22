function minChange(amount, coins, memo){
  if(amount === 0){
    return 0;
  }
  if(amount < 0){
    return -1;
  }
  if(amount in memo){
    return memo[amount];
  }
  let minCoin = -1;
  for(let num of coins){
    let result = minChange(amount - num, coins, memo)
    if(result != -1){
        let currentCnt = result + 1;
        if(currentCnt < minCoin || minCoin === -1){
          minCoin = currentCnt;
        }
    }
  }
  memo[amount] = minCoin;
  return minCoin;
}

console.log(minChange(151, [1, 2, 3, 4], {}))