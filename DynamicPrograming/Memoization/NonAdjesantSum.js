function nonAdjesantSum(numbers){
  return helper(numbers, numbers.length ,0, {});
}

function helper(numbers, n, i, memo){
  if(i>=n){
    return 0;
  }
  if(i in memo){
    return memo[i];
  }
  let ans = Math.max(numbers[i] + helper(numbers, n, i+2, memo), helper(numbers, n, i+1, memo));
  memo[i] = ans;
  return ans;
}

const numbers = [2,4,5,12,10,7];
console.log(nonAdjesantSum(numbers))