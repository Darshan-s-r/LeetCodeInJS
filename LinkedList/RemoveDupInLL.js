const Node = require("./DetectLoop.js")
function removeDuplicates(head) {
  // your code here
  if(head.next === null){
      return head
  }
  let prev = head;
  let next = head.next;
  while(next != null){
      if(prev.data === next.data){
          next = next.next;
      }else{
          prev.next = next;
          prev = next;
          next = next.next;
      }
      
  }
  prev.next = null;
  return head;
}



let head = new Node(2);
head.next = new Node(3);
head.next.next = new Node(4);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(4);
head.next.next.next.next.next = new Node(4);

console.log(removeDuplicates(head));