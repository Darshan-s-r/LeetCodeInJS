function minPerfeectSquareSum(num){
  return helper(num, {})
}

function helper(num, memo){
  if(num === 0){
    return 0;
  }
  if(num in memo){
    return memo[num]
  }
  let min = Infinity;
  for(let i = 1; i<=Math.sqrt(num); i++){
    let ans = 1+ helper(num - i*i, memo);
    if(ans < min){
      min = ans
    }
  }
  memo[num] = min;
  return min;
}

console.log(minPerfeectSquareSum(22))