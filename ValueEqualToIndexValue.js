function valueEqualToIndex(arr) {
  // code here
  const ans = new Array;
  for(let i = 0; i < arr.length; i++){
      if(arr[i] === i+1){
          ans.push(arr[i]);
      }
  }
  return ans;
}