function find(arr,n,x){
  //code here
  let start = -1;
  let end = -1;
  for(let i = 0; i<n; i++){
      if(arr[i] === x){
          if(start === -1){
              start = i;
              end = i;
          }else{
              end = i;
          }
      }
  }
  return new Array(start, end);
}