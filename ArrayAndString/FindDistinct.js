function distinct(str){
  let arr = str.split(",");
  let deci = arr.map((num)=>binaryToDecimal(num));
  let set = new Set([...deci]);
  return set;
  
}

const ans = distinct("110,110,10,1,0,111,111,101")
console.log(ans)

function binaryToDecimal(str){
  let sum = 0;
 for(let i = 0; i<str.length; i++){
   sum += (str.charAt(i)-'0') * (2 ** (str.length - 1 - i));
 }
 return sum; 
}