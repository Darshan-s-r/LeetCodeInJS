const Reverse = (arr)=>{
    for(let i = 0; i< arr.length/2; i++){
      let temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

const arr = new Array(1,10, 21, 2, 3, 4, 5, 6, 7, 8,9);
console.log("this is my function",Reverse(arr));
Reverse(arr)
console.log("this is slice.revese",arr.slice().reverse())