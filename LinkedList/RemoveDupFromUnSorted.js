const Node = require("./DetectLoop");
function removeDuplicates(head) {
  // your code here
  if(head.next === null){
     return head;
  }
  let prev = head;
  let next = head.next;
  
  let set = new Set();
  set.add(prev.data);
  while(next !== null){
      if(set.has(next.data)){
          next = next.next;
      }else{
          set.add(next.data);
          prev.next = next;
          prev = next;
          next = next.next;
      }
  }
  prev.next = null;
  return head;
}

let head = new Node(5);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(4);
// head.next.next.next.next.next = new Node(2);

console.log(removeDuplicates(head));
console.log(head.next.next)