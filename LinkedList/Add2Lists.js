const reverseList = require("./ReverseSingleLL")
const Node = require("./DetectLoop")
function addTwoLists(num1, num2) {
  // your code here
  let first = reverseList(num1);
  let second = reverseList(num2);
  let carry = 0;
  let head = null;
  let temp = null;
  while(first !== null || second !== null || carry > 0){
      let sum = carry;
      if(first !== null){
          sum += first.data;
          first = first.next;
      }
      if(second !== null){
       sum += second.data;
       second = second.next;
      }
      carry = Math.floor(sum /10);
      if(head === null){
          head = new Node(sum % 10);
          temp = head;
      }else{
          temp.next = new Node(sum % 10);
          temp = temp.next;
      }
  }
  return reverseList(head);
}

let num1 = new Node(2);
num1.next = new Node(3);
num1.next.next = new Node(4);
num1.next.next.next = new Node(4);


let num2 = new Node(2);
num2.next = new Node(3);
num2.next.next = new Node(4);
num2.next.next.next = new Node(4);

console.log(addTwoLists(num1, num2));

