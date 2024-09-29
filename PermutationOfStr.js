//  V V IMP  
function Permutation(str){
  let N =  str.length;
  let arr = [];
  helper(str, 0, N, arr);
  return arr;
}

function helper(str, i, N, arr){
  if(i >= N){
    arr.push(str);
      return;
  }
  for(let j = i; j<N;j++){
      let temp = swap(str, i, j);
      helper(temp, i+1, N, arr);
  }
}

function swap(str, i, j){
  let arr = str.split("");
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr.join("");
}

console.log(Permutation("abc"));