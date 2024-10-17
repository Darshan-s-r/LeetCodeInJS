// recursive opproch
var preorderTraversal = function(root) {
  let list = [];
  helper(root, list);
  return list;
};

function helper(root, list){
  if(root === null){
      return;
  }
  list.push(root.val);
  helper(root.left, list);
  helper(root.right, list);
}

// iterative oproch
var preorderTraversal1 = function(root) {

  let stack = [];
  let list = [];
  stack.push(root);
  let curr = root;
  while(stack.length > 0){
      if(curr !== null){
            list.push(curr.val);
      
      if(curr.right !== null){
          stack.push(curr.right)
      }
      curr = curr.left;
      }else{
          curr = stack.pop();
      }
    
  }
  return list;
};


// iterative oproch
var preorderTraversal2 = function(root) {

  if(root === null){
      return []
  }

  let stack = [];
  let list = [];
  stack.push(root);
  while(stack.length > 0){
      let curr = stack.pop();
      list.push(curr.val);
      if(curr.right !== null){
          stack.push(curr.right);
      }
      if(curr.left !== null){
          stack.push(curr.left);
      }
    
  }
  return list;
};