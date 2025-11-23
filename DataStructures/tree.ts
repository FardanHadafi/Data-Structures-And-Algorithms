class Tree {
  val: number;
  left: Tree | null;
  right: Tree | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
