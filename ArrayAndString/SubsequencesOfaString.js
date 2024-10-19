function subSequence(str){
    helper(str, "");
}


function helper(str1, str2){
  if(str1.length === 0){
    console.log(str2);
    return;
  }
  helper(str1.substring(1), str2 + str1[0]);
  helper(str1.substring(1), str2);
}

subSequence("abc");