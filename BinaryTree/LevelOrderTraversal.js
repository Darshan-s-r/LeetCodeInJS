function levelOrder(root)
    {
        //your code here
        const queue = [];
        queue.push(root);
        let list = [];
        while(queue.length > 0){
            let current = queue.shift();
            if(current.left !== null){
                queue.push(current.left);
            }
            if(current.right !== null){
                queue.push(current.right);
            }
            list.push(current.data);
        }
        return list;
    }

  
    class Node{
      constructor(data){
          this.data = data;
          this.left = null;
          this.right = null;
      }
  }

  module.exports = Node;

  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);

  module.exports = root;

  console.log(levelOrder(root));