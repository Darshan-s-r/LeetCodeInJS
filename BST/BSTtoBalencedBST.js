function buildBalancedTree(root){
  //code here
  let arr = [];
  toArr(root, arr);
 return helper(arr, 0, arr.length-1);
}

function toArr(root, arr){
   if(root === null){
       return;
   }
   toArr(root.left, arr);
   arr.push(root.data);
   toArr(root.right, arr);
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