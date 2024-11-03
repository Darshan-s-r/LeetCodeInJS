class Queue {
  constructor(){
    this.arr = [];
  }
  push(ele){
    this.arr.push(ele);
  }

  pop(){
    if(this.arr.length <= 0 ){
      throw new Error("queue is empty");
    }
    return this.arr.shift();
  }
  size(){
    return this.arr.length;
  }

}


let queue = new Queue();
queue.push(10);
queue.push(20);
queue.push(30);
queue.push(40);
console.log(queue.pop());
console.log(queue.size())
console.log(queue)



