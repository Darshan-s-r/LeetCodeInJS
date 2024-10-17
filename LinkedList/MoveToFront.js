function moveToFront(head) {
  // your code here
  let temp = head;
  let prev = head;
  while(temp .next !== null){
      prev = temp;
      temp = temp.next;
      
  }
  prev.next = null;
  temp.next = head;
  return temp;
}