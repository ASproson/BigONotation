class TreeNode {
  constructor(val, left = null, right = null) {
    this.value = val;
    this.leftChild = left;
    this.rightChild = right;
  }
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const root = new TreeNode(5, node1, node4);
node1.rightChild = node2;
node2.rightChild = node3;

const search = (value, node) => {
  // Base case: if node does not exist or it's the value we're looking for
  if (!node || node.value === value) {
    return node;
    // If value is less than current, search left side
  } else if (value < node.value) {
    return search(value, node.leftChild);
    // If value is greater than current, search left side
  } else {
    return search(value, node.rightChild);
  }
};

console.log(search(3, root)); // should output node3
console.log(search(1, root)); // should output node1
console.log(search(5, root)); // should output root
console.log(search(6, root)); // should output null
