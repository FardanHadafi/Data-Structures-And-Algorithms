class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Basic BFS Traversal (Level by level)
function bfsTree(root: TreeNode | null): number[] {
  if (!root) return [];

  const result: number[] = [];
  const queue: TreeNode[] = [root]; // Initialize queue with root

  while (queue.length > 0) {
    // Remove front node from queue
    const node = queue.shift()!;
    // Process current node
    result.push(node.val);
    // Add children to the queue (left to right)
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
}
