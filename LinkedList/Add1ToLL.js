function addOne(node) {
  // your code here
  let newHead = this.reverseList(node);
  let afterAddOne = this.addingOne(newHead);
  let ans = this.reverseList(afterAddOne);
  return ans;
}

function addingOne(newHead){
  let carry = 1;
  let temp = newHead;
  let prev = temp;
  while(temp !== null){
      let ans = temp.data + carry;
          carry = Math.floor(ans / 10);
          ans = ans % 10;
          temp.data = ans;
      prev = temp;
      temp = temp.next;
  }
  if(carry > 0){
      let tail = new Node(carry);
      prev.next = tail;
  }
  return newHead;
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