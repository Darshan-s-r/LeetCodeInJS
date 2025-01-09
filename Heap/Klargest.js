function kLargest(arr, k) {
  let ans = []
  // code here
  for(let i = Math.floor(arr.length/2)+1; i>=0; i--){
  heapify(arr, arr.length, i);
  }
  for(let j = 0; j<k; j++){
      ans.push(arr[0]);
      Delete(arr, arr.length-1-j)
  }
  return ans;
}

function heapify(arr, n, i){
  let largest = i;
  let l = Math.floor(2 * i + 1);
  let r = Math.floor(2 * i + 2);
  if(l<n && arr[l] > arr[largest]){
      largest = l;
  }
  if(r<n && arr[r] > arr[largest]){
      largest = r;
  }
  if(i !== largest){
      [arr[largest], arr[i]] = [arr[i], arr[largest]]
      heapify(arr, n, largest)
  }
}

function Delete(arr, s){
  [arr[0], arr[s]] = [arr[s], arr[0]];
  heapify(arr, s, 0)
}

let arr = [12, 5, 787, 1, 23]
let k = 2

console.log(kLargest(arr, k))