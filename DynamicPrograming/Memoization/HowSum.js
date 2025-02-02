function howSum(target, numbers, memo={}){
  if(target in memo){
    return memo[target]
  }
  if(target < 0){
    return null;
  }
  if(target === 0){
    return [];
  }
  for(let i = 0; i<numbers.length; i++){
    let subResult = howSum(target-numbers[i], numbers, memo);
    if(subResult !== null){
     let results = [numbers[i], ...subResult]
     memo[target] = results;
      return results;
    }
  }
  memo[target] = null;
return null;
}

console.log(howSum(53, [5, 3]))