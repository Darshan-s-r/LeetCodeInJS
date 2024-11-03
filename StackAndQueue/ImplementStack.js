class Stack {
   constructor(){
    this.arr = [];
   }

   push(ele){
    this.arr.push(ele);
   }

   pop(){
    if(this.arr.length <= 0){
      throw new Console.Error("stack is empty");
    }
    this.arr.pop();
   }

   size(){
   return this.arr.length;
   }

}

let stack = new Stack();

stack.push(2);
stack.push(4);
console.log(stack.size());
console.log(stack);
stack.pop();
console.log(stack);
console.log(stack.size());
stack.pop();
stack.pop();
stack.pop();

