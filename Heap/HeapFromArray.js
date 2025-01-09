let arr = [1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17];

function maxHeap(arr, n){
  if(n === 0 || n === 1){
    return arr;
  }

  let startInd = Math.floor(n/2 - 1);
  for(let i = startInd; i>= 0; i--){
    heapify(arr, n, i);
  }
  return arr;
}

  function heapify(arr, n, i){
    let largest = i;
    let left = 2*i + 1;
    let right = 2 * i + 2;

    if(left < n && arr[left] > arr[largest]){
      largest = left;
    }
    if(right < n && arr[right] > arr[largest]){
      largest = right;
    }
    if(largest !== i){
      [arr[largest], arr[i]] = [arr[i], arr[largest]];
      heapify(arr, n, largest);
    }
  }

  let ans = maxHeap(arr, arr.length);
  print(ans, ans.length)


  function print(ans, n){
    let str = '';
    for(let i = 0; i<n; i++){
      str += ans[i] + " ,";
    }
    console.log(str)
  }



