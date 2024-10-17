const Node = require("./LevelOrderTraversal")
const root = require("./LevelOrderTraversal")

 function diameter(root) {
  let diameter = 0;
  const height = (root) => {
  if(root === null){
      return 0;
  }
  let LeftHeight = height(root.left);
  let RightHeight = height(root.right);
  
  diameter = Math.max(diameter, LeftHeight + RightHeight + 1);

  return Math.max(LeftHeight + RightHeight) + 1;
}
height(root);
return diameter;
}

console.log(diameter(root));