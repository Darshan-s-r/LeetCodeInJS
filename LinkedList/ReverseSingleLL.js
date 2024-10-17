// /*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
// */

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

  module.exports = reverseList;

  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);

  let ans = reverseList(head)
  console.log(ans);