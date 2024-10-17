// https://leetcode.com/problems/binary-tree-inorder-traversal/

var inorderTraversal = function(root) {
  let list = [];
  helper(root, list);
  return list;
};

function helper(root, list){
  if(root === null){
      return;
  }
  helper(root.left, list);
  list.push(root.val);
  helper(root.right, list);
}