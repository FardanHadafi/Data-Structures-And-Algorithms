const array: number[] = [1, 2, 3, 4, 5];
//==================== BASIC OPERATIONS ====================//

// Length
console.log(array.length);
// Access Element
console.log(array[0]);
console.log(array[array.length - 1]); // Access last index
console.log(array.at(-1)); // Access last index (Modern)
console.log(array.at(-2)); // Access second last index
// Modify Element
console.log((array[0] = 10));

//==================== ADDING / REMOVING ELEMENTS ====================//

// Add to last index - 0(1)
console.log(array.push(6)); // Returns new length
console.log(array.push(7, 8, 9, 10)); // Can add multiple values at once

// Remove the last index - 0(1)
console.log(array.pop());

// Add to first index
console.log(array.unshift(0)); // Returns new array

// Remove the first index - 0(n)
console.log(array.shift());

// Add or Remove at any position - 0(n)
console.log(array.splice(2, 1)); // At index 2 delete 1 element
console.log(array.splice(2, 2, 88, 99)); // At index 2 delete 2 add 88 and 99

// ================ SEARCHING & FINDING =============== //

const arr: number[] = [10, 20, 30, 40, 50, 30];
// indexOf - returns first index or -1 - 0(n)
console.log(arr.indexOf(20)); // 1
console.log(arr.indexOf(-1)); // -1
console.log(arr.indexOf(30, 3)); // Search from index 3

// lastIndexOf - returns last index or -1 - 0(n)
console.log(arr.lastIndexOf(30)); // 5

// includes - returns first element that matches - 0(n)
console.log(arr.includes(10)); // True
console.log(arr.includes(60)); // False

// Find - returns first element that matches - 0(n)
const found = arr.find((x) => x > 10);
const notFound = arr.find((x) => x > 100);
console.log(found);
console.log(notFound);

// findLast & findLastIndex (ES2023)
console.log(arr.findLast((x) => x === 10));
console.log(arr.findLastIndex((x) => x === 20));

// Some - check if Any element matches - 0(n)
console.log(arr.some((x) => x === 10));
console.log(arr.some((x) => x === 0));

// Every - check if all element matches - 0(n)
console.log(arr.every((x) => x > 1));
console.log(arr.every((x) => x > 10));

// ================ ITERATION METHOD ================ //
const numArr: number[] = [1, 2, 3, 4, 5];
// forEach - Execute function for each element - 0(n)
numArr.forEach((value, index) => {
  console.log(`arr[${index}] = ${value}`);
});

// Map - Transform each element returns new array - 0(n)
console.log(numArr.map((x) => x * 2));
console.log(numArr.map((value, index) => `${index} = ${value}`));

// Filter - Keep element that match condition - 0(n)
const even: number[] = numArr.filter((x) => x % 2 === 0);
const odd: number[] = numArr.filter((x) => x % 3 === 0);
console.log(even);
console.log(odd);

// Reduce - Reduce array to single value - 0(n)
const min = numArr.reduce((previousValue, currentValue) =>
  Math.min(previousValue, currentValue)
);
const avg =
  numArr.reduce((previousValue, currentValue) => previousValue + currentValue) /
  numArr.length;
const max = numArr.reduce((previousValue, currentValue) =>
  Math.max(previousValue, currentValue)
);
console.log(min);
console.log(avg);
console.log(max);

// =================== TRANSFORMATION & MANIPULATION ================== //
const arrNum: number[] = [1, 2, 3, 4, 5];
// Slice - Extract portion, doesnt modify original value - 0(n)
console.log(arrNum.slice(1, 5)); // From index 1 to 4
console.log(arrNum.slice(-3)); // last 3 index
console.log(arrNum.slice()); // Shallow copy

// Concat - Merge arrays, doenst modify original value - 0(n)
const arrNum2: number[] = [6, 7, 8, 9, 10];
const merged: number[] = arrNum.concat(arrNum2);
const modernMerged: number[] = [...arrNum, ...arrNum2]; // Using spread syntax
console.log(merged);
console.log(modernMerged);

// Join - Create string from array - 0(n)
console.log(arrNum.join());
console.log(arrNum.join(""));
console.log(arrNum.join(" "));
console.log(arrNum.join("-"));

// Reverse - Reverse in place, modify original array's value - 0(n)
console.log(arrNum.reverse());
console.log(arrNum);

// Sort - Sort in place, modify original array's value - 0(n log n)
const nums: number[] = [5, 3, 1, 4, 2];
console.log(nums.sort());
console.log(nums.sort((a, b) => a + b)); // Ascending
console.log(nums.sort((a, b) => b - a)); // Descending

const fruits: string[] = ["Cherry", "Banana", "Apple"];
console.log(fruits.sort());

// Flat - Flatten nested array - 0(n)
const nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat()); // Default depth = 1;
console.log(nested.flat(2));

// flatMap - Map then Flat (Default Depth = 1) - 0(n)
const arr2: number[] = [1, 2, 3];
console.log(arr2.flatMap((x) => [x, x * 2]));

// Fill - Fill with static value - 0(n)
const arr3 = new Array(5).fill(0);
console.log(arr3);
console.log(arr3.fill(1, 2, 4)); // Fill from index 2 to 3 (Fill 1 from index 2(2) to 3(4-1))

// copyWithin - Copy part of array to another location - 0(n)
const arr4: number[] = [1, 2, 3, 4, 5];
console.log(arr4.copyWithin(0, 3));

// ====================== CONVERTING & TYPE CHECKING ============== //
// toString - Convert array of number to string
console.log([1, 2, 3, 4, 5].toString());

// Array.isArray - Check if value is array
console.log(Array.isArray([1, 2, 3, 4, 5]));
console.log(Array.isArray("True"));

// Array.from - Create array from iterable
console.log(Array.from("Hello World"));
console.log(Array.from(new Set([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]))); // Set creates unique array
console.log(Array.from({ length: 5 }, (_, i) => i * 2));

// Spread Operator
const original: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const copy: number[] = [...original]; // Shallow copy
const combined: number[] = [...original, 11, 12, 13, 14, 15];
console.log(copy);
console.log(combined);

// Advanced / Useful Patterns
const withDupes: number[] = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
const unique: number[] = [...new Set(withDupes)];
console.log(unique);

// Tuples
type StaffCount = [number, string, string, string?];
const staff: StaffCount[] = [
  [5, "aaaa", "bbbb", "cccc"],
  [6, "bbbb", "aaaa"],
];
