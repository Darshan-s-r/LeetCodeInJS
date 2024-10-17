function reverseLevelOrder(root){
  //code here
  let queue = [];
  let list = [];
  queue.push(root);
  while(queue.length > 0 ){
      let current = queue.shift();
      list.unshift(current.data);
      if(current.right !== null){
          queue.push(current.right);
      }
      if(current.left !== null){
          queue.push(current.left);
      }
  }
  return list;
}