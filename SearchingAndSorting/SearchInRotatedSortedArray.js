function search(nums, target) {
  let ans = helper(nums, target, 0, nums.length-1);
  return ans;
};

function helper(nums, target, start, end){
  if(start > end){
    return -1;
}
let mid = Math.floor(start + (end - start)/2);
  if(nums[mid] === target){
      return mid;
  }
  if(nums[start] <= nums[mid]){
    if(nums[start] <= target && nums[mid] >= target){
      return helper(nums, target, start, mid-1);
    }else{
      return helper(nums, target, mid +1, end);
    }
  }

  if(nums[mid] < nums[end]){
    if(target >= nums[mid] && target <= nums[end]){
      return helper(nums, target, mid+1, end);
    }else{
      return helper(nums, target, start, mid-1);
    }
  }
}

// console.log(search([5,1,3], 5));
console.log(search([8, 9, 1, 2, 4, 6,7 ], 9))