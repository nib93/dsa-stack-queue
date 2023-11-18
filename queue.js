/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    //create a new node
    let newNode = new Node(val);

    //if the queue is empty then the new node would be first and last node
    if (!this.first) {
      this.first = newNodeode;
      this.last = newNodeode;
    } else {
      //if the queue is not empty then add the node at the end of the queue
      this.last.next = newNodeode;
      this.last = newNodeode;
    }

    //increase the size of the queue
    this.size++;

  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {

    //if the queue is empty then we can't delete the node from it
    if (!this.first) throw new Error("Can't dequeue from an empty queue.");

    //if there is only one node 
    let temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    //if the there are multiple nodes then remove the first node
    this.first = this.first.next;
    //decrease the queue size
    this.size--;
    return temp.val;

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    //return the first node (front node)
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    
    //return true if the queue size is 0
    return this.size === 0;

  }
}

module.exports = Queue;
