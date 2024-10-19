const MinMax = (arr)=>{
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);
//   return new Array(min, max);
let min1 = arr[0];
let max1 = arr[0];
for(let i = 0; i< arr.length; i++){
    if(arr[i]<min1){
      min1 = arr[i];
    } 
    if(arr[i] > max1){
      max1 = arr[i];
    }
}
return new Array(min1, max1);
}

console.log(MinMax(new Array(4, 7, 2, 6, 1, 9)));