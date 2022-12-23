class Person {
  constructor(name) {
    this.name = name;
    this.friends = [];
    this.visited = false;
  }

  addFriend(friend) {
    this.friends.push(friend);
  }

  displayNetwork() {
    // We keep track of every node we ever visit, so we can reset their
    // ‘visited’ attribute back to false after our algorithm is complete:
    const toReset = [this];
    // Create the queue. It starts out containing the root vertex:
    const queue = [this];
    this.visited = true;
    while (queue.length > 0) {
      // The current vertex is whatever is removed from the queue
      const currentVertex = queue.shift();
      console.log(currentVertex.name);
      // We add all adjacent vertices of the current vertex to the queue:
      currentVertex.friends.forEach((friend) => {
        if (!friend.visited) {
          toReset.push(friend);
          queue.push(friend);
          friend.visited = true;
        }
      });
    }
    // After the algorithm is complete, we reset each node’s ‘visited’
    // attribute to false:
    toReset.forEach((node) => {
      node.visited = false;
    });
  }
}

const person1 = new Person("Alice");
const person2 = new Person("Bob");
const person3 = new Person("Charlie");
const person4 = new Person("David");
const person5 = new Person("Eve");

person1.addFriend(person2);
person1.addFriend(person3);
person2.addFriend(person4);
person2.addFriend(person5);
person3.addFriend(person5);

console.log("P1 Network>>", person1.displayNetwork());
// Output: Alice, Bob, Charlie, David, Eve

console.log("P2 Network>>", person2.displayNetwork());
// Output: Bob, Alice, Charlie, David, Eve
