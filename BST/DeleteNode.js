var deleteNode = function(root, key) {
  if(root === null){
      return root;
  }
  let temp = root;
  while(temp !== null){

      if(temp.val === key){
          return helper(temp);
      }
      if(key > temp.val){
          if(temp.right !== null && temp.right.val === key){
              temp.right = helper(temp.right);
          }else{
              temp = temp.right;
          }
      }else{
          if(temp.left !== null && temp.left.val === key){
              temp.left = helper(temp.left);
              
          }else{
              temp = temp.left;
          }
      }
  }
  return root;
};

function helper(root){
  if(root.left === null){
      return root.right;
  }
  if(root.right === null){
      return root.left;
  }

  let rightTree = root.right;
  let rightMostNode = rightMost(root.left);
  rightMostNode.right = rightTree;
  return root.left;

}

function rightMost(root){
  if(root.right == null){
      return root
  }
  return rightMost(root.right);
}