class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  // Insert
  insert(value: T): void {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    // Level order insertion
    const queue: TreeNode<T>[] = [this.root];

    while (queue.length > 0) {
      const current = queue.shift()!;

      if (!current.left) {
        current.left = newNode;
        return;
      } else {
        queue.push(current.left);
      }

      if (!current.right) {
        current.right = newNode;
        return;
      } else {
        queue.push(current.right);
      }
    }
  }

  // Check if tree is empty
  isEmpty(): boolean {
    return this.root === null;
  }

  // Get height of tree
  getHeight(node: TreeNode<T> | null = this.root): number {
    if (!node) {
      return 0;
    }

    const leftHeight = this.getHeight(node.left);
    const rightHeight = this.getHeight(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  // Count total nodes
  countNodes(node: TreeNode<T> | null = this.root): number {
    if (!node) {
      return 0;
    }
    return 1 + this.countNodes(node.left) + this.countNodes(node.right);
  }

  // Count leaf nodes
  countLeaves(node: TreeNode<T> | null = this.root): number {
    if (!node) {
      return 0;
    }

    if (!node.left && !node.right) {
      return 1;
    }

    return this.countLeaves(node.left) + this.countLeaves(node.right);
  }
}
