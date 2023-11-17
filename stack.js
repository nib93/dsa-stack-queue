/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    //create a node
    let node = new Node(val);
    //if the stack is empty then assign new node as a first and last node
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      //if the stack is not empty then append the node at the end
      let tmp = this.first;
      this.first = node;
      this.first.next = tmp;
    }

    //increase the stack size
    this.size++;

  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    
    //if the stack is empty then we can not pop from the empty node. throw an error in that case
    if (!this.first)
      throw new Error("Can't pop from an empty stack.");

    //if there is only one node in the stack then pop up and make last node as null
    let temp = this.first;

    if (this.first == this.last) {
      this.last = null;
    }

    //in other cases pop up the first node and make the next node as first node
    this.first = this.first.next;
    //decrease the stack size
    this.size--;
    return temp.val;

  }

  /** peek(): return the value of the first node in the stack. */

  peek() {

    //return the first value of the stack
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    
    //if the stack length is zero then return true
    return this.size === 0;

  }
}

module.exports = Stack;
