function sortedArrayToBST(nums) {
  // code here
  return helper(nums, 0, nums.length-1);
}

function helper(nums, start, end){
  if(end < start){
      return null;
  }
  let mid = Math.floor((end - start)/2 + start);
  let node = new Node(nums[mid]);
  node.left = helper(nums, start, mid-1);
  node.right = helper(nums, mid + 1, end);
  return node;
}