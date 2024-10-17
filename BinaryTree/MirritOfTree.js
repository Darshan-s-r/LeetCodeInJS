var invertTree = function(root) {
  helper(root);
  return root;

};

function helper(root){
  if(root === null){
      return;
  }
  let left = root.left;
  let right = root.right;
  root.left = right;
  root.right = left;
  helper(root.left);
  helper(root.right);
}