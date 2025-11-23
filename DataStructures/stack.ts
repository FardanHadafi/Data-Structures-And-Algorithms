// Stack implementation in TypeScript
// Stack is LIFO : Last In First Out

class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  // Add element to top of stack - 0(1)
  push(element: T): void {
    this.items.push(element);
  }

  // Check if stack is empty - O(1)
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Remove and return top element - 0(1)
  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }

  // View top element without removing - 0(1)
  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  // Get stack size - 0(1)
  size(): number {
    return this.items.length;
  }

  // Clear all elements - 0(1)
  clear(): void {
    this.items = [];
  }

  // Print stack content (for debugging)
  print(): void {
    console.log(this.items.toString());
  }

  // Convert to array (return copy)
  convert(): T[] {
    return [...this.items];
  }
}

// ==== EXAMPLE AND USE CASES ==== //
const stack = new Stack<number>();
// Push elements
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log("After pushing 1, 2, 3, 4, 5");
stack.print();

// Peek at top
console.log("Top element (peek):", stack.peek());

// Pop elements
console.log("Popped:", stack.pop());
console.log("After Popping");
stack.print();

console.log("Stack size:", stack.size()); // 4
console.log("Is empty ?", stack.isEmpty()); // False

// ==== USE CASE 1 ==== //
// Reverse a string
function reverseString(string: string): string {
  const stack = new Stack<string>();

  // Push all string characters onto stack
  for (const str of string) {
    stack.push(str);
  }

  // Pop all characters (they come out in reverse)
  let reversed: string = "";
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }
  return reversed;
}

console.log(reverseString("TypeScript"));
console.log(reverseString("Data Structures"));
console.log(reverseString("Algorithms"));

// ==== USE CASE 2 ==== //
// Browser History (Back Button)
class BrowserHistory {
  private backStack: Stack<string>;
  private forwardStack: Stack<string>;
  private currentPage: string;

  constructor(homepage: string) {
    this.backStack = new Stack<string>();
    this.forwardStack = new Stack<string>();
    this.currentPage = homepage;
  }

  visit(url: string): void {
    this.backStack.push(this.currentPage);
    this.currentPage = url;
    this.forwardStack.clear(); // Clear forward history
    console.log(`Visiting: ${url}`);
  }

  back(): string {
    if (this.backStack.isEmpty()) {
      console.log("No page in back story");
      return this.currentPage;
    }

    this.forwardStack.push(this.currentPage);
    this.currentPage = this.backStack.pop()!;
    console.log(`Going back to: ${this.currentPage}`);
    return this.currentPage;
  }

  forward(): string {
    if (this.forwardStack.isEmpty()) {
      console.log("No page in forward story");
      return this.currentPage;
    }

    this.backStack.push(this.currentPage);
    this.currentPage = this.forwardStack.pop()!;
    console.log(`Going forward to: ${this.currentPage}`);
    return this.currentPage;
  }

  getCurrentPage(): string {
    return this.currentPage;
  }
}

const browser = new BrowserHistory("google.com");
browser.visit("youtube.com");
browser.visit("github.com");
browser.visit("stackoverflow.com");
browser.back(); // Back to github.com
browser.back(); // Back to youtube.com
browser.forward(); // Forward to github.com
browser.visit("reddit.com"); // Forward history cleared

// ==== USE CASE 3 ==== //
// Undo & Redo Functionality
class TextEditor {
  private text: string;
  private undoStack: Stack<string>;
  private redoStack: Stack<string>;

  constructor() {
    this.text = "";
    this.undoStack = new Stack<string>();
    this.redoStack = new Stack<string>();
  }

  type(newText: string): void {
    this.undoStack.push(this.text);
    this.text += newText;
    this.redoStack.clear(); // Clear redo history
    console.log(`Text: "${this.text}"`);
  }

  undo(): void {
    if (this.undoStack.isEmpty()) {
      console.log("Nothing to undo");
      return;
    }
    this.redoStack.push(this.text);
    this.text = this.undoStack.pop()!;
    console.log(`After undo: "${this.text}"`);
  }

  redo(): void {
    if (this.redoStack.isEmpty()) {
      console.log("Nothing to redo");
      return;
    }
    this.undoStack.push(this.text);
    this.text = this.redoStack.pop()!;
    console.log(`After redo: "${this.text}`);
  }

  getText(): string {
    return this.text;
  }
}

const editor = new TextEditor();
editor.type("Hello");
editor.type(" World");
editor.type("!");
editor.undo(); // Remove "!"
editor.undo(); // Remove "World"
editor.redo(); // Add back " World"
