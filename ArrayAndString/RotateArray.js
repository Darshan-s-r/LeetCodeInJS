/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k = k%nums.length;
  shift(nums, 0, nums.length -1 -k);
  shift(nums, nums.length - k, nums.length - 1);
  shift(nums, 0, nums.length-1);
};

function shift(nums, start, end){
  while(start < end){
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
  }
}