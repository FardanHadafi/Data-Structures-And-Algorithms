// Push() Add element(s) at ends (Mutates the original array)
const push = ["Apple", "Banana"];
// Push() returns the new length of the array
console.log(push.push("Cherry"));
console.log("After push('Cherry')", push);

// Pop() remove and returns last element (Mutates the original array)
const pop = ["Apple", "Banana", "Cherry"];
const poppedPop = pop.pop();
console.log(poppedPop);

// Unshift() Add element(s) at starts (Mutates the original array)
const unshift = ["Banana", "Cherry"];
// Unshift() returns the new length of the array
console.log(unshift.unshift("Apple"));
console.log(unshift);

// Shift() remove and returns first element (Mutates the original array)
const shift = ["Apple", "Banana", "Cherry"];
const shiftedShift = shift.shift();
console.log(shiftedShift);

// Splice(startIndex, deleteCount, items(to add)) remove or add at any position
const splice = ["Apple", "Banana", "Cherry", "Durian", "Eggfruit"];
const splicedSplice = splice.splice(0, 1);
// Splice() returns the deleted element
console.log(splicedSplice);
console.log(splice);
// Add "Apple" back to the array
console.log(splice.splice(0, 0, "Apple"));
console.log(splice);
// Splice() also can replace element at index
const replacedSplice = splice.splice(3, 1, "Dragon Fruit");
// Splice() returns the replaced element
console.log(replacedSplice);
console.log(splice);

// Slice(startIndex, endIndex - 1) (end index excluded) extract portion of array
const slice = [1, 2, 3, 4, 5];
// Slice() returns copy of a section of an array
console.log(slice.slice(1, 3));
// Slice() accepts negative value (negative value starts from end)
console.log(slice.slice(-2));

// Map() Transform each element (Returns new array)
const map = [1, 2, 3, 4, 5];
console.log(map.map((value) => value * 2));

// Filter() Keep elements that pass test (Returns new array)
const filter = [1, 2, 3, 4, 5];
console.log(filter.filter((value) => value > 2));
const even = filter.filter((value) => value % 2 === 0);
const odd = filter.filter((value) => value % 2 !== 0);
console.log(even);
console.log(odd);

// Reduce(previousValue, currentValue, initialValue) reduce array to single value
const reduce = [1, 2, 3, 4, 5];
console.log(
  reduce.reduce((previousValue, currentValue) => previousValue + currentValue)
);

// ForEach() Execute function for each element (Returns nothing)
const forEach = ["Apple", "Banana", "Cherry", "Durian"];
forEach.forEach((value, index) => {
  console.log(`${index}: ${value}`);
  // We create our own returns
  const newArray = Array.from(`${value}`);
  return newArray;
});
console.log(forEach);

// Find() Returns first element that passes test
const users: { name: string; age: number }[] = [
  { name: "Alice", age: 23 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 19 },
];
const usersUnderTwenty = users.find((user) => user.age < 20);
const usersBelowTwenty = users.find((user) => user.age > 20);
console.log(usersUnderTwenty);
// Eventhough "Bob" pass the test "Bob" is not on the list because "Alice" came first
console.log(usersBelowTwenty);

// FindIndex() Return Index of first element that passes the test
const findIndex = ["Apple", "Banana", "Cherry", "Durian"];
const cherryIndex = findIndex.findIndex((value) => value === "Cherry");
console.log(cherryIndex);

// IndexOf() Find first index of element returns -1 if not found
const indexOfString = ["Hello", "World"];
const indexOfNumber = [1, 2, 3, 4, 5];
console.log(indexOfString.indexOf("Hello"));
console.log(indexOfString.indexOf("World"));
console.log(indexOfNumber.indexOf(3));
console.log(indexOfNumber.indexOf(4));
console.log(indexOfString.indexOf("Typescript"));

// LastIndexOf() Find last index of element
const lastIndexOfString = ["Hello", "World", "Hello", "World"];
const lastIndexOfNumber = [1, 2, 3, 3, 2, 1, 4, 5, 5, 4, 3, 1, 2];
console.log(lastIndexOfString.lastIndexOf("Hello"));
console.log(lastIndexOfString.lastIndexOf("World"));
console.log(lastIndexOfNumber.lastIndexOf(1));
console.log(lastIndexOfNumber.lastIndexOf(2));
console.log(lastIndexOfNumber.lastIndexOf(3));
console.log(lastIndexOfNumber.lastIndexOf(4));
console.log(lastIndexOfNumber.lastIndexOf(5));

// Includes() Check if array contains element
const includesString = ["Hello", "World"];
const includesNumber = [1, 2, 3, 4, 5];
console.log(includesString.includes("Hello"));
console.log(includesString.includes("World"));
console.log(includesString.includes("Typescript"));
console.log(includesNumber.includes(1));
console.log(includesNumber.includes(6));
