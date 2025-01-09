class Pair{
  constructor(value, index){
    this.value = value;
    this.index = index;
  }
}

function  maxOfSubarrays(arr, k) {
  let ans = [];
  let heap = [];
  for(let i = 0; i< k; i++){
      heap.push(new Pair(arr[i], i))
  }
  heap.sort((a, b)=>b.value-a.value);
  ans.push(heap[0].value);

  for(let i = k; i<arr.length; i++){
    heap.push(new Pair(arr[i], i))

    heap.sort((a, b)=>b.value-a.value)

    while(heap[0].index <= i - k){
      heap.shift()
    }
    ans.push(heap[0].value)
  }
  return ans;
}

function maxOfSubArray2(arr, k){
  let dq = []
  let i;
  for( i = 0; i<k; i++){
  }
}

let arr = [1,2,3,1,4,5,2,3,6]
console.log(maxOfSubarrays(arr, 3))