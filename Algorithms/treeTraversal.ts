class BinaryTreeNode {
  value: number;
  left: BinaryTreeNode | null;
  right: BinaryTreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// In-Order Traversal (LEFT -> ROOT -> RIGHT)
// Used for: Getting sorted values from BST
function inOrderTraversal(
  node: BinaryTreeNode | null,
  result: number[] = []
): number[] {
  if (node === null) return result;

  inOrderTraversal(node.left, result); // 1. Visit left subtree
  result.push(node.value); // 2. Process current node
  inOrderTraversal(node.right, result); // 3. Visit right subtree

  return result;
}

// Pre-Order Traversal (ROOT -> LEFT -> RIGHT)
// Used for: Copying tree, Prefix expression, Creating tree from array
function preOrderTraversal(
  node: BinaryTreeNode | null,
  result: number[] = []
): number[] {
  if (node === null) return result;

  result.push(node.value); // 1. Process current node FIRST
  preOrderTraversal(node.left, result); // 2. Visit left subtree
  preOrderTraversal(node.right, result); // 3. Visit right subtree

  return result;
}

// Post-Order Traversal (LEFT -> RIGHT -> ROOT)
// Used for: Deleting tree, Postfix expression, Calculating directory sizes
function postOrderTraversal(
  node: BinaryTreeNode | null,
  result: number[] = []
): number[] {
  if (node === null) return result;

  postOrderTraversal(node.left, result); // 1. Visit left subtree
  postOrderTraversal(node.right, result); // 2. Visit right subtree
  result.push(node.value); // 3. Process current node LAST

  return result;
}

// Level-Order Traversal (Breadth-First Search)
// Visits nodes level by level, left to right
function levelOrderTraversal(root: BinaryTreeNode | null): number[] {
  if (root === null) return [];

  const result: number[] = [];
  const queue: BinaryTreeNode[] = [root];

  while (queue.length > 0) {
    const node = queue.shift()!; // Dequeue from front
    result.push(node.value);

    // Enqueue children left to right
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
}

// Level Order with levels separated
function levelOrderByLevels(root: BinaryTreeNode | null): number[][] {
  if (root === null) return [];

  const result: number[][] = [];
  const queue: BinaryTreeNode[] = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel: number[] = [];

    // Process all nodes at current level
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;
      currentLevel.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(currentLevel);
  }
  return result;
}
