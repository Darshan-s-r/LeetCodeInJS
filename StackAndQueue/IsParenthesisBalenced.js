const isParenthesisBalanced = (s) => {
  // code here
  let stack = [];
  for(let i = 0; i < s.length; i++){
      let temp = s[i];
      if(temp === '(' || temp === '{' || temp === '['){
          stack.push(temp);
      }
      else{
          if(stack.length > 0){
              let temp2 = stack.pop();
          if(temp === ')' && temp2 === '('){
              continue;
          }else if(temp === ']' && temp2 === '['){
              continue;
          }else if(temp === '}' && temp2 === '{'){
              continue;
          }else{
              return false;
          }
          }
          return false;
          
      }
  }
  if(stack.length > 0){
      return false;
  }
  return true;
}