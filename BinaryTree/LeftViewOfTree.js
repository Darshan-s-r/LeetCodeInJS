function leftView(root)
{
    //your code here
    //root left right
    if(root === null){
        return [];
    }
    let list = []
    helper(root,0, list);
    return list;
}

function helper(root,level,  list){
    if(root === null){
        return;
    }
    
    if(level === list.length){
        list.push(root.data);
    }
      helper(root.left, level + 1, list);
         helper(root.right, level + 1,  list);
    
}