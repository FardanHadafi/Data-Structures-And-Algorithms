// Key-Value pair interface
interface KetValuePair<K, V> {
  key: K;
  value: V;
}

class HashTable<K, V> {
  [x: string]: any;
  private buckets: Array<Array<KetValuePair<K, V>>>;
  private size: number;
  private count: number;

  constructor(size: number = 53) {
    this.size = size;
    this.buckets = new Array(size);
    this.count = 0;

    // Initialized each bucket as an empty array
    for (let i = 0; i < this.size; i++) {
      this.buckets[i] = [];
    }
  }

  /** Hash function: Converts a key to an array index
   * This uses a simple polynomial rolling hash
   */

  private hash(key: K): number {
    const str = String(key);
    let hash = 0;
    const PRIME = 31; // Prime number helps distribute values

    for (let i = 0; i < str.length; i++) {
      hash = (hash * PRIME + str.charCodeAt(i)) % this.size;
    }

    return hash;
  }

  /** Insert or Update a key-value pair
   * Time complexity: 0(1) average case
   */

  set(key: K, value: V): void {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // Check if key already exist and update it
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket[i].value = value;
        return;
      }
    }

    // Key doesnt exist, add new entry
    bucket.push({ key, value });
    this.count++;

    // Rezise if load factor is too high
    if (this.count / this.size > 0.75) {
      this.rezise();
    }
  }

  /** Retrive a value by key
   *  Time complexity: 0(1) average case
   */

  get(key: K): V | undefined {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // Search through the bucket (chain)
    for (const pair of bucket) {
      if (pair.key === key) {
        return pair.value;
      }
    }

    return undefined;
  }

  /** Check if key exist
   *  Time complexity: 0(1) average case
   */
  has(key: K): boolean {
    return this.get(key) !== undefined;
  }

  /** Delete a key-value pair
   *  Time complexity: 0(1) average case
   */
  delete(key: K): boolean {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1);
        this.count--;
        return true;
      }
    }

    return false;
  }

  /** Get all keys */
  keys(): K[] {
    const keys: K[] = [];

    for (const bucket of this.buckets) {
      for (const pair of bucket) {
        keys.push(pair.key);
      }
    }

    return keys;
  }

  /** Get all values */
  values(): V[] {
    const values: V[] = [];

    for (const bucket of this.buckets) {
      for (const pair of bucket) {
        values.push(pair.value);
      }
    }

    return values;
  }

  /** Rezise the hash table when it gets too full
   *  This maintains 0(1) performace
   */
  private resize(): void {
    const oldBuckets = this.buckets;
    this.size = this.size * 2;
    this.buckets = new Array(this.size);
    this.count = 0;

    // Initialize new buckets
    for (let i = 0; i < this.size; i++) {
      this.buckets[i] = [];
    }

    // Rehash all existing entries
    for (const bucket of oldBuckets) {
      for (const pair of bucket) {
        this.set(pair.key, pair.value);
      }
    }
  }

  /** Get number of key-value pairs */
  getCount(): number {
    return this.count;
  }

  /** Get the load factor (how full the table is) */
  getLoadFactor(): number {
    return this.count / this.size;
  }

  /** Print the hash table structure (for debugging) */
  print(): void {
    console.log("\n ==== Hash Table Structure ====");

    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i].length > 0) {
        console.log(
          `Bucket ${i}:`,
          this.buckets[i].map((p) => `{${p.key}: ${p.value}}`)
        );
      }
    }
    console.log(`\n Total entries: ${this.count}`);
    console.log(`Load factor: ${this.getLoadFactor().toFixed(2)}\n`);
  }
}

// ==== EXAMPLES AND DEMONSTRATIONS ==== //
// Example 1: Basic Operations
const phonebook = new HashTable<string, string>(10);
phonebook.set("Alice", "555-1234");
phonebook.set("Bob", "555-5678");
phonebook.set("Charlie", "555-9012");

console.log("Alice's number:", phonebook.get("Alice"));
console.log("Bob's number:", phonebook.get("Bob"));
console.log("Charlie's number:", phonebook.get("Charlie"));
console.log("Has David ?:", phonebook.get("David"));

// Example 2: Updating Values
phonebook.set("Alice", "555-9999"); // Update Alice's
console.log("Alice's new number:", phonebook.get("Alice"));

// Example 3: Deletion
console.log("Delete Bob:", phonebook.delete("Bob")); // True
console.log("Has Bob ?:", phonebook.has("Bob")); // False
console.log("Delete Bob Again:", phonebook.delete("Bob")); // False

// Example 4: Different Data Types
const userScores = new HashTable<string, number>();
userScores.set("player1", 1500);
userScores.set("player2", 2300);
userScores.set("player3", 1800);

console.log("Player 2 scores:", userScores.get("player2")); // 2300

// Example 5: Complex Object
interface User {
  name: string;
  email: string;
  age: number;
}

const user = new HashTable<string, User>();
user.set("u001", { name: "Alice", email: "alice@example.com", age: 23 });
user.set("u002", { name: "Bob", email: "bob@example.com", age: 24 });
user.set("u003", { name: "Charlie", email: "charlie@example.com", age: 25 });

const alice = user.get("u001");
console.log("User u001:", alice);

// Example 6: Collision Demonstration
const smallTable = new HashTable<string, number>(5);
smallTable.set("cat", 1);
smallTable.set("dob", 2);
smallTable.set("bird", 3);
smallTable.set("fish", 4);
smallTable.set("lizzard", 5);
smallTable.set("rabbit", 6);
smallTable.print(); // Shows how items are distributed

// Example 7: Working with Keys and Values
const inventory = new HashTable<string, number>();
inventory.set("apples", 10);
inventory.set("banana", 20);
inventory.set("cherry", 30);
inventory.set("dupe", 40);

console.log("All items:", inventory.keys()); // ["apples", "banana", "cherry", "dupe"]
console.log("All quantities:", inventory.values()); // [10, 20, 30, 40]

// Example 8: Performace Demonstration
const largeTable = new HashTable<string, number>();
console.time("Insert 1000 items");
for (let i = 0; i < 1000; i++) {
  largeTable.set(`key${i}`, i * 10);
}
console.timeEnd("Insert 1000 items");

console.time("Lookup 1000 items");
for (let i = 0; i < 1000; i++) {
  largeTable.get(`key${i}`);
}
console.timeEnd("Lookup 1000 items");

console.log(`Final count: ${largeTable.getCount()}`);
console.log(`Load factor: ${largeTable.getLoadFactor()}`);
