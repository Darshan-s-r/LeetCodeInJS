function findFirstNode(head) {
  // code here
  if(head.next === null && head.next.next === null){
      return -1
  }
  let slow = head;
  let fast = head;
  let hasLoop = false;
  while(fast !== null && fast.next !== null){
      slow = slow.next;
      fast = fast.next.next;
      if(slow === fast){
          hasLoop = true;
          break;
      }
      
  }
  if(hasLoop){
      slow = head;
      if(slow === fast){
          return fast.data;
      }
      while(slow !== fast){
          slow = slow.next;
          fast = fast.next;
      }
       return fast.data;
  }
      return -1;
  
}