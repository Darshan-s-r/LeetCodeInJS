function findEquilibrium(arr) {
  // code here
  let n = arr.length;
  let rightSum = 0;
  let leftSum = 0;
  
  for(let i = 1; i < n; i++){
      rightSum += arr[i]
  }
  
  for(let j = 1; j<n-1; j++){
      leftSum += arr[j-1]
      rightSum -= arr[j];
      if(leftSum === rightSum){
          return j;
      }
  }
  return -1;
  
}

console.log(findEquilibrium([1, 2, 0, 3])) // output 2 [index];
console.log(findEquilibrium([1, 1, 1, 1])) // output -1;