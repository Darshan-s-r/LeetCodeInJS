function doUnion(arr1, arr2) {
  let mySet = new Set([...arr1, ...arr2]);
  return mySet.size;
}

let arr1 = [1, 3, 5, 7, 8];
let arr2 = [4, 7, 8, 0];
console.log(doUnion(arr1, arr2));