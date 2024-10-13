

function findPair(n, x, arr) {
    arr.sort((a, b)=> a - b);
    let i = 0;
    let j = 1;
    while(i < n && j < n){
      let diff = arr[j] - arr[i];
      if(diff === x && i != j){
        return 1;
      }
      if(diff > x){
        i++;
      }else{
        j++;
      }
      if(i === j){
        j++;
      }
    }
    return -1;
}

// // Example usage
let arr = [2, 3, 5, 5, 20, 80 ]; 
console.log(findPair(arr.length, 15, arr));  // Output: 1 (because 10 - 2 = 8)
//   15