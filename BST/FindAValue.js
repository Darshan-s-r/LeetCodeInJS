function search(root, x) {
  // your code here
  if(root === null){
      return false;
  }
  if(root.data === x){
      return true;
  }
  if(x > root.data){
     return search(root.right, x);
  }else{
     return search(root.left, x);
  }
}