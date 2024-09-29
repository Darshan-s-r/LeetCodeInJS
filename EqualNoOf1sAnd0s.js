// 001110010
// -1

function  maxSubStr(str){
  //your code here
  let Zeros = 0;
  let Ones = 0;
  let count = 0;
  for(let i = 0; i<str.length; i++){
      if(str.charAt(i) == "0"){
          Zeros++;
      }else{
          Ones++;
      }
      if(Zeros === Ones){
          count++;
      }
  }
  if(Zeros !== Ones){
    return -1;
  }
  return count;
}

console.log(maxSubStr("001110010"));