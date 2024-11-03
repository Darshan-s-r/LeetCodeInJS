class Node {
  constructor (x){
    this.data = x;
    this.prev = null;
    this.next = null;
  }
}

class MyStack {
  constructor(){
    this.head = null;
    this.mid = this.head;
    this.size = 0;
  }

  push(x){
    let temp = new Node(x);
    if(this.head === null){
      this.head = temp;
      this.mid = this.head;
    }
  else{
    this.head.next = temp;
    temp.prev = this.head;
    this.head = this.head.next;
   
    if(this.size % 2 !== 0){
      this.mid = this.mid.next;
    }
  }
  this.size++;
 
  }

  pop(){
    if(this.size < 1){
      console.log(MyStack.empty);
      return undefined;
    }
    if(this.size === 1){
      let temp = this.head;
      this.head = null;
      this.mid = this.head;
      size--;
      return temp.data;
    }
    if(this.size === 2){
      let temp = this.head;
      this.head = this.head.prev;
      this.head.next = null;
      this.mid = this.head;
      size --;
      return temp.data;
    }else{
      let temp = this.head;
      this.head = this.head.prev;
      this.head.next = null;
      this.size--;
  
      if(this.size % 2 !== 0){
          this.mid = this.mid.prev;
      }
      return temp.data;
    } 
  }

  findMid(){
    if(this.size < 1){
      return undefined;
    }
    return this.mid.data;
  }
  deleteMid(){
    if(this.size < 1){
      return undefined;
    }
    if(this.size === 1){
      let temp = this.mid;
      this.head = null;
      this.mid = this.head;
      size--;
      return temp.data;
    }
    else if (this.size === 2) {
      this.head = this.head.prev;
      this.head.next = null;
      this.mid = this.head;
      this.size--;
    }
    let temp = this.mid;
    if(this.size % 2 === 0){
      this.mid = temp.prev;
      this.mid.next = temp.next;
      temp.next.prev = this.mid;
    }else{
      this.mid = temp.next;
      this.mid.prev = temp.prev;
    }
    this.size--;
    return temp.data;
  }

  print(){
    let temp = this.head;
    let str = "";
    while(temp !== null){
      str =  temp.data + "  " + str;
      temp = temp.prev;
    }
    return str;
  }
}

let stack = new MyStack();
stack.push(10);
stack.push(15);
stack.push(30);
stack.push(5);
stack.push(8);
stack.push(11);
console.log(stack.print());
console.log(stack.findMid());
console.log(stack.pop());
console.log(stack.print())
console.log(stack.findMid());
console.log(stack.deleteMid());
console.log(stack.print())
console.log(stack.deleteMid());
console.log(stack.print())