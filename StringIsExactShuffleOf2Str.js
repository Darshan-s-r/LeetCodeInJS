// Write a Program to check whether a string is a valid shuffle of two strings or not

function isShuffle(str1, str2, result){
  if(str1.length + str2.length === result.length){
      const obj = {};
      let i = 0;
      while(i < result.length){
        let temp = result.charAt(i);
            if(obj[temp]){
              obj[temp] = obj[temp] + 1;
            }else{
              obj[temp] = 1;
            }
            i++
        }
        
        let j = 0, k = 0;
        while(j < str1.length || k < str2.length){
          if(j < str1.length){
            let temp = str1.charAt(j);
            if(obj[temp]){
              obj[temp] = obj[temp] - 1;
            }
            else{
              return false;
            }
            j++;
          }
          if(k < str2.length){
            let temp = str2.charAt(k);
            if(obj[temp]){
              obj[temp] = obj[temp] - 1;
            }else{
              return false;
            }
            k++;
          }
        }

        Object.values(obj).map(val =>{
          if(val !== 0){
            return false 
          }
        })
        return true;
  }else{
    return false;
  }
}

console.log(isShuffle(  "ABC", "ZYS", "YBAZSC"   ));
