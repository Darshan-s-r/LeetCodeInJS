function countingChange(amount, coins){
  return helper(amount, coins, 0, {})
}

function helper(amount, coins, idx, memo){
  if(amount === 0){
    return 1;
  }
  if(idx >= coins.length){
    return 0;
  }
  let key = amount+"-"+idx
  if(key in memo){
    return memo[key];
  }
  let value = coins[idx];
  let currentCount = 0;
  for(let i = 0; value*i<=amount; i++){
      currentCount += helper(amount-value*i, coins, idx+1, memo)
  }
  
  memo[key] = currentCount
  return currentCount;
}

console.log(countingChange(56, [1, 2, 3, 4, 6]))

