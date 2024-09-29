function kthSmallest(arr,l,r,k){
  sort(arr, l, r);
  console.log(arr);
  return arr[k-1];
}

console.log(kthSmallest(new Array(7, 10, 4, 3, 20, 15), 0, 6, 4));

function FindMin(arr, l, r){
   let min = l;
   for(let i = l;i<r; i++){
        if(arr[i] < arr[min]){
            min = i;
        }
   }
   return min;
}

function sort(arr, l, r){
   for(let i = l;i<r; i++ ){
       let min = FindMin(arr, i, r);
       let temp = arr[i];
       arr[i] = arr[min];
       arr[min] = temp;
   }
}