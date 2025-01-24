function countPath(grid, memo) {
  return helper(grid, 0, 0, memo);
}

function helper(grid, i, j, memo) {
  let key = i + "-" + j;

  if (key in memo) {
    return memo[key];
  }

  if (i === grid.length - 1 && j === grid[0].length - 1) {
    if (grid[i][j] === "O") {
      return 1;
    }
  }
  if (i >= grid.length || j >= grid[0].length) { 
    return 0;
  }
  if (grid[i][j] === "X") {
    return 0;
  }

  let ans = helper(grid, i + 1, j, memo) + helper(grid, i, j + 1, memo);
  memo[key] = ans;
  return ans;
}

const grid = [
  ["O", "O", "O"],
  ["O", "O", "O"],
  ["O", "O", "O"],
  ["O", "O", "O"],
  ["O", "O", "O"],
  ["O", "O", "O"],
  ["O", "O", "O"],
];
const memo = {};
console.log(countPath(grid, memo));
let i = 3;
let j = 2;
