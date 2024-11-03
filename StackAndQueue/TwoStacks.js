class TwoStacks {
  // constructor for twoStacks()
  constructor() {
      this.arr1 = [];
      this.arr2 = [];
  }

  // Function to push an integer into the stack1.
  push1(x) {
      this.arr1.push(x);
  }

  // Function to push an integer into the stack2.
  push2(x) {
      this.arr2.push(x);
  }

  // Function to remove an element from top of the stack1.
  pop1() {
      if(this.arr1.length <= 0){
          return -1;
      }
      return this.arr1.pop();
  }

  // Function to remove an element from top of the stack2.
  pop2() {
      if(this.arr2.length <= 0){
          return -1;
      }
      return this.arr2.pop();
  }
}