// Basic linear search that returns the index of the target
function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Generic version that works with any type
function linearSearchGeneric<T>(arr: T[], target: T): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Returns all indices where target appear
function linearSearchAll(arr: number[], target: number): number[] {
  const indices: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) indices.push(i);
  }
  return indices;
}

// Using a custom comparison function
function linearSearchWithComparator<T>(
  arr: T[],
  predicate: (item: T) => boolean
): number {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      return i;
    }
  }
  return -1;
}

// ==== EXAMPLES ==== //
// Example 1: Search in numbers array
const numbers: number[] = [3, 1, 4, 2, 5];
console.log("Array:", numbers);
console.log("Search for 1:", linearSearch(numbers, 1));
console.log("Search for 6:", linearSearch(numbers, 6));

// Example 2: Search in string array
const fruits: string[] = ["Cherry", "Apple", "Date", "Banana"];
console.log("\n Fruits:", fruits);
console.log("Search for Cherry:", linearSearchGeneric(fruits, "Cherry"));

// Example 3: Find all occurrences
const duplicate: number[] = [5, 2, 8, 2, 9, 2, 3];
console.log("\n Array with duplicates", duplicate);
console.log("All indices of 2:", linearSearchAll(duplicate, 2));

// Example 4: Search object with custom predicate
interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: "Alice", age: 32 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 29 },
];

console.log("\n People:", people);
const bobIndex = linearSearchWithComparator(people, (p) => p.name === "Bob");
console.log("Index of bob:", bobIndex);

const over30Index = linearSearchWithComparator(people, (p) => p.age > 30);
console.log("People over 30:", over30Index);
