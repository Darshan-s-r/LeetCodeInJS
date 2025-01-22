function SumPossible(amount, numbers, memo){
  if(amount === 0){
    return true;
  }
  if(amount < 0){
    return false;
  }
  if(amount in memo){
    return memo[amount];
  }
  for(let num of numbers){
    let requiredAmt = amount - num;
    let result = SumPossible(requiredAmt, numbers, memo);
    if(result){
      memo[amount] = result;
      return result;
    }
  }
  memo[amount] = false;
  return false;
}

const memo = {}
console.log(SumPossible(5, [6, 2, 3], memo))               
