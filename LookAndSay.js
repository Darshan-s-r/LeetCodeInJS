// 1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211

function lookAndSay(n){
  return helper("1", 1, n);
}

function helper(str,j, n){
  if(j === n){
    return str;
  }
  str = str + "$";
  let N = str.length;
  let i = 0;
  let ans = "";
  let temp = str.charAt(i);
  let count = 0;
  while(i < N-1){
      if(str.charAt(i) === temp){
        count++;
      }else{
        ans = ans + count + temp;
        count = 1;
        temp = str.charAt(i);
        
      }
      i++;
  }
  ans =ans + count + temp;
  return helper(ans, j+1, n);
}

console.log(lookAndSay(8));