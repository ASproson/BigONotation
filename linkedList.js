class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }

  getData() {
    return this.data;
  }

  setData(data) {
    this.data = data;
  }

  getNextNode() {
    return this.nextNode;
  }

  setNextNode(node) {
    this.nextNode = node;
  }
}

let node1 = new Node("once");
let node2 = new Node("upon");
node1.setNextNode(node2);

let node3 = new Node("a");
node2.setNextNode(node3);

let node4 = new Node("time");
node3.setNextNode(node4);

class LinkedList {
  constructor(firstNode) {
    this.firstNode = firstNode;
  }

  read(index) {
    let currentNode = this.firstNode;
    let currentIndex = 0;
    while (currentIndex < index) {
      currentNode = currentNode.getNextNode();
      currentIndex += 1;
      if (!currentNode) {
        return null;
      }
    }
    return currentNode.getData();
  }

  search(value) {
    let currentNode = this.firstNode;
    let currentIndex = 0;
    while (currentNode) {
      if (currentNode.getData() === value) {
        return currentIndex;
      }
      currentNode = currentNode.getNextNode();
      currentIndex += 1;
    }
    return null;
  }

  insertAtIndex(index, value) {
    let currentNode = this.firstNode;
    let currentIndex = 0;
    while (currentIndex < index) {
      currentNode = currentNode.getNextNode();
      currentIndex += 1;
    }
    const newNode = new Node(value);
    newNode.setNextNode(currentNode.getNextNode());
    currentNode.setNextNode(newNode);
  }

  deleteAtIndex(index) {
    let currentNode = this.firstNode;
    let currentIndex = 0;
    while (currentIndex < index - 1) {
      currentNode = currentNode.getNextNode();
      currentIndex += 1;
    }
    const nodeAfterDeletedNode = currentNode.getNextNode().getNextNode();
    currentNode.setNextNode(nodeAfterDeletedNode);
  }
}

const linkedList = new LinkedList(node1);
console.log(linkedList.read(0));
console.log(linkedList.read(1));
console.log(linkedList.read(2));
console.log(linkedList.read(3));
console.log(linkedList.search("time"));
linkedList.insertAtIndex(1, "inserting");
console.log(linkedList.read(0));
console.log(linkedList.read(1));
console.log(linkedList.read(2));
console.log(linkedList.read(3));
console.log(linkedList.read(4));
linkedList.deleteAtIndex(2);
console.log(linkedList.read(0));
console.log(linkedList.read(1));
console.log(linkedList.read(2));
console.log(linkedList.read(3));
