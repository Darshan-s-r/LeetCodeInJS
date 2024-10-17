class Height{
  height(node)
  {
      //your code here
     return this.helper(node)
  }
  
  helper(node){
      if(node === null){
          return 0;
      }
      let left = 0;
      let right = 0;
      if(node.left !== null){
          left = this.helper(node.left);
      }
      if(node.right !== null){
          right = this.helper(node.right);
      }
      return (1 + Math.max(left, right));
      
  }
}