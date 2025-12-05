class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Append - Add element to the end 0(1)
  append(value: T): void {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // Prepend - Add element to beginning 0(1)
  prepend(value: T): void {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  // Insert at specific index - 0(1)
  insertAt(index: number, value: T): boolean {
    if (index < 0 || index > this.size) {
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

    const newNode = new ListNode(value);
    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      current = current!.next;
    }

    newNode.next = current!.next;
    current!.next = newNode;
    this.size++;
    return true;
  }

  // Remove first - remove the first element in the list - 0(1)
  removeFirst(): T | null {
    if (!this.head) {
      return null;
    }

    const value = this.head.value;
    this.head = this.head.next;
    this.size--;

    if (this.size === 0) {
      this.tail = null;
    }

    return value;
  }

  // Remove last - remove the last element in the list - 0(1)
  removeLast(): T | null {
    if (!this.head) {
      return null;
    }

    if (this.size === 1) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      this.size = 0;
      return value;
    }

    let current = this.head;
    while (current.next !== this.tail) {
      current = current!.next!;
    }

    const value = this.tail!.value;
    current.next = null;
    this.tail = current;
    this.size--;

    return value;
  }

  // Remove at specific index - 0(n)
  removeAt(index: number): T | null {
    if (index < 0 || index >= this.size) {
      return null;
    }

    if (index === 0) {
      return this.removeFirst();
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current!.next;
    }

    const value = current!.next!.value;
    current!.next = current!.next!.next;

    if (index === this.size - 1) {
      this.tail = current;
    }

    this.size--;
    return value;
  }

  // Remove by value - 0(n)
  remove(value: T): boolean {
    if (!this.head) {
      return false;
    }

    if (this.head.value === value) {
      this.removeFirst();
      return true;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        if (!current.next) {
          this.tail = current;
        }
        this.size--;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // Get element at index - 0(n)
  indexOf(value: T): number {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  // Check if list contains value - 0(n)
  contains(value: T): boolean {
    return this.indexOf(value) !== -1;
  }

  // Clear the list - 0(1)
  clear(): void {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Check if empty - 0(1)
  isEmpty(): boolean {
    return this.size === 0;
  }

  // Convert to array - 0(n)
  toArray(): T[] {
    const array: T[] = [];
    let current = this.head;

    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }

  // Print the list - 0(n)
  print(): void {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    const values: T[] = [];
    let current: ListNode<T> | null = this.head;

    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> ") + " -> null");
  }

  // Reverse the list - 0(n)
  reverse(): void {
    if (!this.head || this.size === 1) {
      return;
    }

    this.tail = this.head;
    let prev = null;
    let current = this.head;

    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
    }
    this.head = prev;
  }

  traverse() {
    let temp = this.head;

    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
}
