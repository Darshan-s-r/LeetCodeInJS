function  mergeKArrays(arr,K){
  //code here
  let ans = [];
  for(let i = 0; i<arr.length; i++){
      for(let j = 0; j<arr[0].length; j++){
          ans.push(arr[i][j])
      }
  }
  ans.sort((a, b) => a - b);
  return ans;
}

let arr = [[1,2,3],[4,5,6],[7,8,9]];
let k = 3

console.log(mergeKArrays(arr, k))