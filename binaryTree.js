class TreeNode {
  constructor(val, left = null, right = null) {
    this.value = val;
    this.leftChild = left;
    this.rightChild = right;
  }
}

// const node1 = new TreeNode(1);
// const node2 = new TreeNode(2);
// const node3 = new TreeNode(3);
// const node4 = new TreeNode(4);
// const root = new TreeNode(5, node1, node4);
// node1.rightChild = node2;
// node2.rightChild = node3;

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

// console.log(search(3, root)); // should output node3
// console.log(search(1, root)); // should output node1
// console.log(search(5, root)); // should output root
// console.log(search(6, root)); // should output null

const insert = (value, node) => {
  if (value < node.value) {
    // If the left child does not exist, we want to insert
    // the value as the left child:
    if (node.leftChild === null) {
      node.leftChild = new TreeNode(value);
    } else {
      insert(value, node.leftChild);
    }
  } else if (value > node.value) {
    // If the right child does not exist, we want to insert
    // the value as the right child:
    if (node.rightChild === null) {
      node.rightChild = new TreeNode(value);
    } else {
      insert(value, node.rightChild);
    }
  }
};

// const root2 = new TreeNode(5);
// console.log(root2);
// insert(3, root2);
// insert(7, root2);
// insert(2, root2);
// insert(4, root2);
// insert(6, root2);
// insert(8, root2);
// console.log(root2);

function del(valueToDelete, node) {
  // The base case is when we’ve hit the bottom of the tree,
  // and the parent node has no children:
  if (node === null) {
    return null;
  }
  // If the value we’re deleting is less or greater than the current node,
  // we set the left or right child respectively to be
  // the return value of a recursive call of this very method on the current
  // node’s left or right subtree.
  if (valueToDelete < node.value) {
    node.leftChild = del(valueToDelete, node.leftChild);
    // We return the current node (and its subtree if existent) to
    // be used as the new value of its parent’s left or right child:
    return node;
  } else if (valueToDelete > node.value) {
    node.rightChild = del(valueToDelete, node.rightChild);
    return node;
  }
  // If the current node is the one we want to delete:
  if (valueToDelete === node.value) {
    // If the current node has no left child, we delete it by
    // returning its right child (and its subtree if existent)
    // to be its parent’s new subtree:
    if (node.leftChild === null) {
      return node.rightChild;
    }
    // (If the current node has no left OR right child, this ends up
    // being null as per the first line of code in this function.)
    if (node.rightChild === null) {
      return node.leftChild;
    }
    // If the current node has two children, we delete the current node
    // by calling the lift function (below), which changes the current
    // node’s
    // value to the value of its successor node:
    node.rightChild = lift(node.rightChild, node);
    return node;
  }
}

function lift(node, nodeToDelete) {
  // If the current node of this function has a left child,
  // we recursively call this function to continue down
  // the left subtree to find the successor node.
  if (node.leftChild) {
    node.leftChild = lift(node.leftChild, nodeToDelete);
    return node;
  }
  // If the current node has no left child, that means the current node
  // of this function is the successor node, and we take its value
  // and make it the new value of the node that we’re deleting:
  nodeToDelete.value = node.value;
  // We return the successor node’s right child to be now used
  // as its parent’s left child:
  return node.rightChild;
}

// Test the delete function
const root = new TreeNode(5);
insert(3, root);
insert(7, root);
insert(2, root);
insert(4, root);
insert(6, root);
insert(8, root);
console.log(root);
del(7, root);
console.log(root);

const traverse = (node) => {
  if (node === null) {
    return;
  }
  traverse(node.leftChild);
  console.log(node.value);
  traverse(node.rightChild);
};

console.log(">>>", traverse(root));
