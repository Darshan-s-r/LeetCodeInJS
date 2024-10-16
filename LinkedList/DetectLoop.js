function detectLoop(head) {
  // your code here
  if(head.next === null || head.next.next === null){
      return false;
  }
  let slow = head;
  let fast = head.next.next;
  while(fast != null){
      if(slow === fast){
          return true;
      }
      slow = slow.next;
      if(fast.next === null || fast.next.next === null){
          return false;
      }else{
          fast = fast.next.next;
      }
      
  }
  return false;
}

class Node{
  constructor(data){
      this.data = data;
      this.next = null;
  }
}

module.exports = Node;

let head = new Node(3);
head.next = new Node(5);
head.next.next = new Node(4);
head.next.next.next = new Node(7);
head.next.next.next.next = new Node(7);
head.next.next.next.next.next = new Node(9);
head.next.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next.next = head.next.next.next.next

console.log(detectLoop(head))