function BestSum(target, numbers, memo = {}){
  if(target in memo){
    return memo[target];
  }
    if(target === 0){
      return [];
    }
    if(target < 0) return null;
    let result = null;
    for(let num of numbers){
      let subResults = BestSum(target - num, numbers, memo);
      if(subResults !== null){
        if(result === null){
          result = [num, ...subResults]
        }
        if(result.length > subResults.length){
          result = [num, ...subResults]
        }
      }
    }
    memo[target] = result;
    return result;
}

console.log(BestSum(53, [1, 2, 3, 4, 5]))