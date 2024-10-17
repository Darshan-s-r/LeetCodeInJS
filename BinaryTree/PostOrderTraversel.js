// Iterative 
function  postOrder(root)
{
    //your code here
    // left right root;
    let stack = [];
    let list = [];
    stack.push(root);
    while(stack.length > 0){
        let curr = stack.pop();
        list.push(curr.data);
        if(curr.left !== null){
            stack.push(curr.left);
        }
        if(curr.right !== null){
            stack.push(curr.right);
        }
        
    }
    while(list.length > 0){
        stack.push(list.pop())
    }
return stack;
}

// Recursive
function postOrder(root)
{
    //your code here
    // left right root;
    let list = [];
    helper(root, list)
   return list;
}

function helper(root, list){
    if(root === null){
        return;
    }
    helper(root.left, list);
    helper(root.right, list);
    push(root.data)
}