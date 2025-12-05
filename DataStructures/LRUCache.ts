class LRUNode<K, V> {
  key: K;
  value: V;
  prev: LRUNode<K, V> | null;
  next: LRUNode<K, V> | null;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache<K, V> {
  private capacity: number;
  private cache: Map<K, LRUNode<K, V>>;
  private head: LRUNode<K, V>; // Dummy head (oldest)
  private tail: LRUNode<K, V>; // Dummy tail (newest)

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();

    // Create dummy head and tail
    this.head = new LRUNode(null as any, null as any);
    this.tail = new LRUNode(null as any, null as any);

    // Connect them
    this.head.next = this.tail;
    this.tail = this.head;
  }

  // Get value by ket
  get(key: K): V | null {
    const node = this.cache.get(key);

    if (!node) {
      return null;
    }
    // Move accessed node to end (most recently used);
    this.moveToEnd(node);
    return node.value;
  }

  // Put key-value pair
  put(key: K, value: V): void {
    let node = this.cache.get(key);

    if (node) {
      // Update existing node
      node.value = value;
      this.moveToEnd(node);
    } else {
      // Create new node
      node = new LRUNode(key, value);
      this.cache.set(key, node);
      this.addToEnd(node);

      // Check capacity
      if (this.cache.size > this.capacity) {
        // Remove least recenlty used (first real node after head)
        const lru = this.head.next!;
        this.removeNode(lru);
        this.cache.delete(lru.key);
      }
    }
  }

  // Helper: Remove node from its current position
  private removeNode(node: LRUNode<K, V>): void {
    const prevNode = node.prev!;
    const nextNode = node.next!;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }

  // Helper: Add node to end (before tail)
  private addToEnd(node: LRUNode<K, V>): void {
    const lastNode = this.tail.prev!;

    lastNode.next = node;
    node.prev = lastNode;
    node.next = this.tail;
    this.tail.prev = node;
  }

  // Helper: Move existing node to end
  private moveToEnd(node: LRUNode<K, V>): void {
    this.removeNode(node);
    this.addToEnd(node);
  }

  // Get current size
  size(): number {
    return this.cache.size;
  }

  // Display cache contents (for debugging)
  display(): void {
    let current = this.head.next;
    const items: Array<{ key: K; value: V }> = [];

    while (current !== this.tail) {
      items.push({ key: current!.key, value: current!.value });
      current = current!.next;
    }
    console.log("Cache (oldest -> newest):", items);
  }
}
