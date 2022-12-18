const { Node, DoublyLinkedList, Queue } = require("./doublyLinkedList");

describe("Node", () => {
  it("should create a new node with data", () => {
    let node = new Node(5);
    expect(node.data).toEqual(5);
  });
});

describe("DoublyLinkedList", () => {
  it("should insert a node at the end of the list", () => {
    let list = new DoublyLinkedList();
    list.insertAtEnd(5);
    list.insertAtEnd(10);
    expect(list.lastNode.data).toEqual(10);
  });

  it("should remove a node from the front of the list", () => {
    let list = new DoublyLinkedList();
    list.insertAtEnd(5);
    list.insertAtEnd(10);
    let removedNode = list.removeFromFront();
    expect(removedNode.data).toEqual(5);
  });
});

describe("Queue", () => {
  it("should enqueue a node", () => {
    let queue = new Queue();
    queue.enqueue(5);
    expect(queue.queue.lastNode.data).toEqual(5);
  });

  it("should dequeue a node", () => {
    let queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(10);
    let removedNode = queue.dequeue();
    expect(removedNode).toEqual(5);
  });

  it("should return the tail node", () => {
    let queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(10);
    let tailNode = queue.tail();
    expect(tailNode.data).toEqual(10);
  });
});
