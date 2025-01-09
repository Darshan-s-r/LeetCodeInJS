const nextLargerElement = (arr) => {
  // code here
  let ans = [];
  let s = 0;
  for(let i = 0; i< arr.length; i++){
      let len = ans.length;
      for(let j =i+1; j < arr.length; j++){
          if(arr[j] > arr[i]){
              ans[s] = arr[j];
              s++;
              break;
          }
      }
      if(len === ans.length){
          ans[s] = -1;
          s++;
      }
  }
  return ans;
}