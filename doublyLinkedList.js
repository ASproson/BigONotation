class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
    this.previousNode = null;
  }
}

class DoublyLinkedList {
  constructor(firstNode = null, lastNode = null) {
    this.firstNode = firstNode;
    this.lastNode = lastNode;
  }

  insertAtEnd(data) {
    let newNode = new Node(data);
    if (!this.firstNode) {
      this.firstNode = newNode;
      this.lastNode = newNode;
    } else {
      newNode.previousNode = this.lastNode;
      this.lastNode.nextNode = newNode;
      this.lastNode = newNode;
    }
  }

  removeFromFront() {
    let removedNode = this.firstNode;
    this.firstNode = this.firstNode.nextNode;
    return removedNode;
  }
}

class Queue {
  constructor() {
    this.queue = new DoublyLinkedList();
  }

  enqueue(data) {
    this.queue.insertAtEnd(data);
  }

  dequeue() {
    let removedNode = this.queue.removeFromFront();
    return removedNode.data;
  }

  tail() {
    return this.queue.lastNode;
  }
}
