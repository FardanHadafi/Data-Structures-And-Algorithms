class QueueNode<T> {
  value: T;
  next: QueueNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class Queue<T> {
  private front: QueueNode<T> | null;
  private back: QueueNode<T> | null;
  private length: number;

  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  // Add element to the back - 0(1)
  enqueue(element: T): void {
    const newNode = new QueueNode(element);

    if (this.isEmpty()) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back!.next = newNode;
      this.back = newNode;
    }

    this.length++;
  }

  // Remove element from the front - 0(1)
  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const value = this.front!.value;
    this.front = this.front!.next;
    this.length--;

    if (this.length === 0) {
      this.back = null;
    }

    return value;
  }

  // View front element - 0(1)
  peek(): T | undefined {
    return this.front?.value;
  }

  // Check if empty - 0(1)
  isEmpty(): boolean {
    return this.length === 0;
  }

  // Get size - 0(1)
  size(): number {
    return this.length;
  }

  // Clear queue - 0(1)
  clear(): void {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  // Print queue - 0(n)
  print(): void {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return;
    }

    const values: T[] = [];
    let current: QueueNode<T> | null = this.front;

    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log("Front ->", values.join(", "), "<- Back");
  }

  // Convert to array - 0(n)
  toArray(): T[] {
    const array: T[] = [];
    let current: QueueNode<T> | null = this.front;

    while (current) {
      array.push(current.value);
      current = current.next;
    }

    return array;
  }
}

// ==== BASIC QUEUE OPERATIONS ==== //
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log("After enqueueing 1, 2, 3, 4, 5:");
queue.print();

console.log("Front element peek():", queue.peek());
console.log("Dequeue:", queue.dequeue());
console.log("After dequeue:");
queue.print();

console.log("Queue size:", queue.size());
console.log("Is Empty ?", queue.isEmpty());

// ==== USE CASE ==== //
// Customer service queue
class Customer {
  constructor(public name: string, public issue: string) {}
}

class CustomerServiceQueue {
  private queue: Queue<Customer>;

  constructor() {
    this.queue = new Queue<Customer>();
  }

  addCustomer(name: string, issue: string): void {
    const customer = new Customer(name, issue);
    this.queue.enqueue(customer);
    console.log(`${name} joined the queue with issue ${issue}`);
  }

  serveNextCustomer(): void {
    const customer = this.queue.dequeue();

    if (customer) {
      console.log(`Now serving: ${customer.name}`);
    } else {
      console.log("No customers in queue");
    }
  }

  showQueue(): void {
    const customers = this.queue.toArray();

    if (customers.length === 0) {
      console.log("Queue is empty");
      return;
    }
    console.log("Customers waiting:");
    customers.forEach((c, i) => {
      console.log(` ${i + 1}. ${c.name} - ${c.issue}`);
    });
  }
}

const serviceQueue = new CustomerServiceQueue();
serviceQueue.addCustomer("Alice", "Billing Question");
serviceQueue.addCustomer("Bob", "Technical Support");
serviceQueue.addCustomer("Charlie", "Product Inquiry");
serviceQueue.showQueue();
serviceQueue.serveNextCustomer();
serviceQueue.serveNextCustomer();
serviceQueue.showQueue();
