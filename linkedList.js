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
}

const linkedList = new LinkedList(node1);
console.log(linkedList.read(0));
console.log(linkedList.read(1));
console.log(linkedList.read(2));
console.log(linkedList.read(3));
console.log(linkedList.search("time"));
