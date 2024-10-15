function removeLoop(head) {
  if(head.next === null || head.next.next === null){
      return;
  }
  // your code here
  let hasLoop = false;
  let slow = head;
  let fast = head;
  while(fast !== null){
      slow = slow.next;
      if(fast.next !== null && fast.next.next !== null){
          fast = fast.next.next;
      }
      if(slow === fast){
          hasLoop = true;
          break;
      }
  }
  if(hasLoop){
      slow = head;
      if(slow === fast){
          while(fast.next !== slow){
              fast = fast.next;
          }
          fast.next = null;
      }else{
          while(slow.next !== null && fast.next !== null && slow.next !== fast.next){
              slow = slow.next;
              fast = fast.next;
          }
          fast.next = null;
      }
  }
}

class Node{
  constructor(data){
      this.data = data;
      this.next = null;
  }
}

let head = new Node(3);
head.next = new Node(5);
head.next.next = new Node(4);
head.next.next.next = new Node(7);
head.next.next.next.next = new Node(7);
head.next.next.next.next.next = new Node(9);
head.next.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next.next = head.next.next.next.next

removeLoop(head);
console.log(head);