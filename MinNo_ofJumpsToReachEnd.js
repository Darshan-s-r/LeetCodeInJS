function PossibleToReachEnd(arr, n){
  let totalReach = 0;
  for(let i = 0; i< n; i++){
    if(i <= totalReach){
      totalReach = Math.max(totalReach, i+arr[i]);
      if(totalReach >= n-1){
        return true;

      }
    }
    else{
      return false;
    }
  }
  
  return true;;
}


let arr = [3,2, 1, 0, 4];
// let arr =[2, 3, 1, 0, 4];
// console.log(PossibleToReachEnd(arr, arr.length));




function MinNoJumps(arr, n){
  if(n === 1){
    return 0;
  }
  let totalReach = 0;
  let count = 0;
  let currentEnd = 0;
  for(let i = 0; i<n-1;i++){
    totalReach = Math.max(totalReach, i + arr[i]);
    if( i === currentEnd ){
      count++;
      currentEnd = totalReach;
      if(currentEnd >= n-1){
        return count;
      }
    }
  }
 
  return -1;
}

let arr1 = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
// let arr1 = [1, 4, 3, 2, 6, 7];
// let arr1 = [0, 10, 20]
console.log(MinNoJumps(arr1, arr1.length));




function MinNo(arr, n){
  let ans =  helper(arr, n, 0, 0);
  if(ans === Infinity) return -1
  return ans;
}

function helper(arr, n, i, count){
  if(i >= n-1){
    return count;
  }
  let temp = arr[i];
 
  let minCount = Infinity;
 
  for(let j = 1; j <= temp; j++){
    minCount = Math.min(minCount, helper(arr, n, i+j, count + 1));
  }
  return minCount;
}


// console.log(MinNo(arr, arr.length));