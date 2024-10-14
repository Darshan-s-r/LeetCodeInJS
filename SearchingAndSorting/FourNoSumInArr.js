function fourSum(arr, target) {
  // code here
  let ans = [];
  let n = arr.length;
  for(let i = 0; i< n; i++){
      if(i > 0 && arr[i] === arr[i-1]){
          continue;
      }
      for(let j = i+1; j < n; j++){
          if(j> i+1 && arr[j] === arr[j-1]){
              continue;
          }
          let k = j+1;
          let l = n-1;
          while(k < l){
              let sum = arr[i] + arr[j] + arr[k] + arr[l];
              if(sum === target){
                  let temp = [];
                  temp.push(arr[i]);
                  temp.push(arr[j]);
                  temp.push(arr[k]);
                  temp.push(arr[l]);
                  ans.push(temp);
                  k++;
                  l--;
                  
                  while(k < l && arr[k] === arr[k-1]){
                      k++;
                  }
                  while(k < l && arr[l] === arr[l+1]){
                      l--;
                  }
              }else if(sum < target){
                  k++;
              }else{
                  l--;
              }
          }
      }
  }
  return ans;
}

let arr = [10, 2, 3, 4, 5, 7, 8], k = 23;
console.log(fourSum(arr, k))