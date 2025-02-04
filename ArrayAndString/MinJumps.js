function minJumps(arr){
  let n = arr.length;
  if(arr[0] === 0){
    return -1;
  }
  let jumps = 0, maxReach = 0, currentEnd = 0;

  for(let i = 0; i<n-1; i++){
    maxReach = Math.max(maxReach, i + arr[i])
    if(i=== currentEnd){
      jumps++;
      currentEnd = maxReach;
      if(currentEnd >= n-1) return jumps
    }
  }

  return -1;
}


// console.log(minJumps([9, 10, 1, 2, 3, 4, 8, 0, 0, 0, 0, 0, 0 ,0 ,1]))
console.log(minJumps([1, 2, 0,0,0]))
console.log(minJumps([2,3,1,1,4])); // Output: 2
console.log(minJumps([1,1,1,1,1])); // Output: 4
console.log(minJumps([0,1,1,1]));