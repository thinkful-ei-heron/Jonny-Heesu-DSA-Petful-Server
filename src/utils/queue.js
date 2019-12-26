class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  };

  enqueue(data) {
    const node = new Node(data);

    if (this.first === null) {
      this.first = node;
    }
    this.length++;
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  };

  dequeue() {
    if (this.first === null) {
      return null;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }
    this.length--;
    return node.value;
  };
  
  remove(data) {
    if (!this.first) {
      return null;
    }
    if (this.first.value.name === data) {
      this.first = this.first.next;
      return;
    }
    
    let currNode = this.first;
    let previousNode = this.first;

    while (currNode !== null && currNode.value.name !== data) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    this.length--;
    previousNode.next = currNode.next;
  };
};

module.exports = Queue;


