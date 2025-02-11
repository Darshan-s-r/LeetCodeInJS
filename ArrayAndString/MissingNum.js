function missingNumber(arr) {
  // code here
  let n = arr.length;
  let requiredSum = (n+1) * (n+1+1)/2;
  let currentSum = 0;
  for(let num of arr){
      currentSum += num;
  }
  return requiredSum - currentSum;
}