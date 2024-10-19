  function CheckRotationStr(str1 , str2){
   if(str1.length <= 0 || str2.length <= 0 ){
    return false;
   }
   str1 = str1.concat(str1);
   return str1.includes(str2);
  }

  console.log(CheckRotationStr("ABCDEFGH", "EFGHABCD"));
  