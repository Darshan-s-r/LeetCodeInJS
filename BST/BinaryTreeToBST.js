function binaryTreeToBST(root){
  //code here
  // left, right, root
  let temp = root;
  let arr = [];
  treeToArr(root, arr);
  arr.sort((a, b)=>a-b);
  convert(temp, arr, [0]);
  return temp;
  
}

function convert(root,arr, i){
    if(root === null){
        return;
    }
    convert(root.left,arr, i);
    root.data = arr[i[0]];
    i[0] = i[0] + 1;
    convert(root.right,arr, i);
    
}

function treeToArr(root, arr){
    if(root === null){
        return;
    }
    treeToArr(root.left, arr);
    arr.push(root.data);
    treeToArr(root.right, arr);
    
}