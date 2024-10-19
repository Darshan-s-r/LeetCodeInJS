var bstFromPreorder = function(preorder) {
  let root = new TreeNode(preorder[0]);
  for(let i = 1;i<preorder.length; i++){
      create(preorder[i], root);
  }
  return root;

};

function create(data, root){
  let node = new TreeNode(data);
  if(data > root.val){
      if(root.right === null){
          root.right = node;
      }else{
          create(data, root.right);
      }
  }else{
      if(root.left === null){
          root.left = node;
      }else{
          create(data, root.left);
      }
  }
}