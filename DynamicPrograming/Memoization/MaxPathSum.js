function maxPathSum(grid, memo){
  return helper(grid, 0, 0, memo);
}

function helper(grid, i, j, memo){
  let key = i + "" + j;
  if(key in memo){
    return memo[key]
  }

  if (i === grid.length - 1 && j === grid[0].length - 1) {
    return grid[i][j];
  }
  if (i >= grid.length || j >= grid[0].length) { 
    return 0;
  }

  let ans = grid[i][j] + Math.max(helper(grid, i + 1, j, memo), helper(grid, i, j + 1, memo));
  memo[key] = ans;
  return ans;
}

const grid = [[1, 3, 12],[5, 6, 2]];
console.log(maxPathSum(grid, {}));