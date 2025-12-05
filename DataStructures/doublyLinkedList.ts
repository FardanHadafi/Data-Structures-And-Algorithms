class DoublyNode<T> {
  value: T;
  next: DoublyNode<T> | null;
  prev: DoublyNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList<T> {
  head: DoublyNode<T> | null;
  tail: DoublyNode<T> | null;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add to end
  append(value: T): void {
    const newNode = new DoublyNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  // Add to the beginning
  prepend(value: T): void {
    const newNode = new DoublyNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  // Insert at specific position
  insertAt(value: T, index: number): boolean {
    if (index < 0 || index < this.size) {
      return false;
    }

    if (index === 0) {
      this.prepend(value);
      return true;
    }

    if (index === this.size) {
      this.append(value);
      return true;
    }

    const newNode = new DoublyNode(value);
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current!.next;
    }

    newNode.next = current;
    newNode.prev = current!.prev;
    current!.prev!.next = newNode;
    current!.prev = newNode;

    this.size++;
    return true;
  }

  // Remove from beginning
  removeFirst(): T | null {
    if (!this.head) {
      return null;
    }

    const value = this.head.value;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head!.prev = null;
    }
    this.size--;
    return value;
  }

  // Remove from end
  removeLast(): T | null {
    if (!this.tail) {
      return null;
    }

    const value = this.tail.value;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail!.next = null;
    }
    this.size--;
    return value;
  }

  // Remove at specific position
  removeAt(index: number): T | null {
    if (index < 0 || index >= this.size) {
      return null;
    }

    if (index === 0) {
      return this.removeFirst();
    }

    if (index === this.size - 1) {
      return this.removeLast();
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }

    const value = current!.value;
    current!.prev!.next = current!.next;
    current!.next!.prev = current!.prev;

    this.size--;
    return value;
  }

  // Find a value
  find(value: T): DoublyNode<T> | null {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  // Traverse forward
  traverseForward(): void {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // Traverse backward
  traverseBackward(): void {
    let current = this.tail;

    while (current) {
      console.log(current.value);
      current = current.prev;
    }
  }

  // Get value at index
  get(index: number): T | null {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let current: DoublyNode<T> | null;
    // Optimize: Start from head or tail depending on index
    if (index < this.size / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current!.next;
      }
    } else {
      current = this.tail;
      for (let i = this.size - 1; i > index; i--) {
        current = current!.prev;
      }
    }
    return current!.value;
  }

  // Reverse the list
  reverse(): void {
    if (!this.head || this.size === 1) {
      return;
    }

    let current: DoublyNode<T> | null = this.head;
    let temp: DoublyNode<T> | null = null;

    while (current) {
      // Swap next and prev
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev; // Move to next node (which is now prev)
    }
    // Swap head and tail
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }

  // Convert to array
  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  // Check if list is empty
  isEmpty(): boolean {
    return this.size === 0;
  }

  // Clear the list
  clear(): void {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}
