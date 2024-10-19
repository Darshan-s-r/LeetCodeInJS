function removeDuplicates(str){
  let N = str.length;
  let ans = "";
  for(let i = 0; i<N; i++){
      let temp = str.charAt(i);
      if(!ans.includes(temp)){
          ans = ans + temp;
      }
  }
  return ans;
}

console.log(removeDuplicates("geeksforgeeks"))
