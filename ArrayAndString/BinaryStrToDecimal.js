function binaryToDecimal(str){
  let sum = 0;
 for(let i = 0; i<str.length; i++){
   sum += (str.charAt(i)-'0') * (2 ** (str.length - 1 - i));
 }
 return sum; 
}


