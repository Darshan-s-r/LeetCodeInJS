function ispar(X) {
  let stack = [];
  for (let x of X) {
      if (x === '(' || x === '{' || x === '[') {
          stack.push(x);
      } else {
          if (stack.length === 0) return false;
          let top = stack.pop();
          if (
              x === ')' && top !== '(' || x === '}' && top !== '{' || x === ']' && top !== '['
          ) {
              return false;
          }
      }
  }
  return stack.length === 0;
}

console.log(ispar("(){}{[]}")); 
