function  LCA(root, n1, n2)
{
    //your code here
    if(root === null || root === n1 || root === n2){
        return root;
    }
    let left = LCA(root.left, n1, n2);
    let right = LCA(root.right, n1, n2);
    if(left === null){
        return right;
    }else if(right === null){
        return left;
    }
    return root;
    
}