function  longestPalin(S){
  if(S.length === 0){
    return S;
  }
  let ans = S.charAt(0);
  let N = S.length;
  for(let i =0;i<N;i++){
    for(let j = i; j<N;j++){
      let temp = S.substring(i, j+1)
      if(temp.length > ans.length && isSubStr(temp)){
        ans = temp;
      }
    }
  }
  return ans;
}

function isSubStr(str){
  let n = str.length;
  for(let i = 0;i<n/2;i++){
      if(str.charAt(i) !== str.charAt(n-1-i)){
          return false;
      }
  }
  return true;
}
console.log(longestPalin("aaaabbaa"))