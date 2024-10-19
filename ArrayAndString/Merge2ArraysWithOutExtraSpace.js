function merge(arr1, arr2){
  let n = arr1.length;
  let m = arr2.length;
  let tLen = n + m;

  helper(arr1, arr2, n, m, tLen);
}

function helper(arr1, arr2, n, m, gap){
  if(gap === 1){
    return;
  }
  gap = Math.ceil(gap / 2);
  let start = 0;
  let end = start + gap;
  while(end < n+m){
    if(start < n && end >= n){
      if(arr1[start] > arr2[end - n]){
      swap2(arr1, arr2, start, end - n);
      }
      start++;
      end++;
    }
    if(start >= n){
      if(arr2[start - n] > arr2[end - n]){
          swap1(arr2, start-n, end-n);
          
      }
      start++;
      end++;
    }
    if( end < n){
      if(arr1[start] > arr1[end]){
        swap1(arr1, start, end);
      }
      start++;
      end++;
    }
   
   
  }
  helper(arr1, arr2, n, m, gap);
}

function swap1(arr1, start, end){
  let temp = arr1[start];
  arr1[start] = arr1[end];
  arr1[end] = temp;
}

function swap2(arr1, arr2, start, end){
    let temp = arr2[end];
    arr2[end] = arr1[start];
    arr1[start] = temp;
}


let arr1 = [1, 3, 5, 7]; 
let arr2 =  [0, 2, 6, 8, 9];  

merge(arr1, arr2);

console.log(arr1);
console.log(arr2);  