let arr = [8, 7, 6, 5, 4, 3, 2, 10]

function heapSort(arr, n){
  maxHeap(arr, n);
  for(let i = n; i> 0; i--){
    deleteEle(arr, i-1)
  }
  return arr;
}

function deleteEle(arr, s){
  [arr[0], arr[s]] = [arr[s], arr[0]];
  heapify(arr, s, 0)
}

function maxHeap(arr, n){
  let startInd = Math.floor(n/2) -1;

  for(let i = startInd; i >= 0; i--){
    heapify(arr, n, i)
  }

}

function heapify(arr, n, i){
  let largest = i;
  let l = 2*i + 1;
  let r = 2 * i + 2;

  if(l < n && arr[l] > arr[largest]){
    largest = l;
  }
  
  if(r < n && arr[r] > arr[largest]){
    largest = r;
  }
  
  if(i !== largest){
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

let ans = heapSort(arr, arr.length);
function print(ans){
  let result = "";
  for(let i = 0; i<ans.length; i++){
    result += ans[i] + ", ";
  }
  console.log(result);
}
print(ans)


