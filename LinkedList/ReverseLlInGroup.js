function getKthNode(temp, k){
  k -=1;
  while(temp != null && k > 0){
      k--;
      if(temp.next !== null){
        temp = temp.next;
      }
        
      
  }
  return temp;
}
function reverse(node, k) {
  let head = null;
  let temp = node;
  let prevLast = null;
  while(temp != null){
      let KthNode = getKthNode(temp, k);
      if(KthNode == null){
          if(prevLast){
              prevLast.next = temp;
              break;
          }
      }
      let nextNode = KthNode.next;
      KthNode.next = null;
      reverseList(temp);
      if(temp === node){
          head = KthNode;
      }else{
          prevLast.next = KthNode;
      }
      prevLast = temp;
      temp = nextNode;
  }
  return head;
  }
  
  function reverseList(head) {
  // your code here
  if(head.next === null){
      return head;
  }
  let prev = null;
  let current = head;
  let next = null;
  while(current !== null){
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
  }
  return prev;

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
head.next.next.next.next.next.next.next = new Node(3);
head.next.next.next.next.next.next.next.next = new Node(1);
head.next.next.next.next.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next.next.next.next.next = new Node(6);

console.log(reverse(head, 3));
console.log(head.next.next.next)
console.log(head.next.next.next.next.next)