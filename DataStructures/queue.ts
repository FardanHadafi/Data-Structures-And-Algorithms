class Queue<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  // Add element to rear - O(1)
  enqueue(element: T): void {
    this.items.push(element);
  }

  // Remove element from front - O(n)
  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift()!;
  }

  // View front element - O(1)
  front(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  // Check if empty - O(1)
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Get size - O(1)
  size(): number {
    return this.items.length;
  }

  // Dipslay queue
  display(): void {
    console.log("Queue", this.items);
  }
}

const queue = new Queue<number>();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.front()); // 10
console.log(queue.dequeue()); // 10
console.log(queue.dequeue()); // 20
queue.display(); // Queue: [30]
