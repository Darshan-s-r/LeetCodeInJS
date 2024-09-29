function moveNtv(arr){
  let N = arr.length;
  let low = 0;
  let high = N-1;
  while(low<=high){
    while(arr[low] < 0){
      low++;
    }
    while(arr[high] >= 0){ 
      high--;
    }
    if(low >= high){
     break;
    }
    [arr[low], arr[high]] = [arr[high], arr[low]];
    low++;
    high--;
  }
  return arr; 
}

const arr = [-12, 11, -13, -5,0, 6, -7, 5, -3, -6];
let arr1 = [ -1, 2, -3, 4, 5, 6, -7, 8, 9 ];

console.log(arr1);
console.log(moveNtv(arr1));