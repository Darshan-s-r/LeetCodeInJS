function populateNext(root) {
  // code here
   helper(root, [null]);
  
}

function helper(root, nextSucc){
  if(root === null){
      return;
  }
   helper(root.right, nextSucc);
  root.next = nextSucc[0];
  nextSucc[0] = root;
   helper(root.left, nextSucc);
}