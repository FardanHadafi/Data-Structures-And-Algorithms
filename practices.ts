// Reverse string
function reverse(str: string): string {
  return str.split("").reverse().join("");
}
console.log(reverse("Typescript"));

// Count vowels
function countVowels(str: string): number {
  const vowel = "aiueoAIUEO";
  return str.split("").filter((char) => vowel.includes(char)).length;
}
console.log(countVowels("abcde"));

// Capitalize first letter
function capitalizeFirst(str: string): string {
  if (str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1); // Return the first char and extract the rest of the string using slice;
}
console.log(capitalizeFirst("hello"));

// isPalindrome
function isPalindrome(str: string): boolean {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("kasur rusak"));

// Sum of array
function sumArray(arr: number[]): number {
  return arr.reduce((pre, curr) => pre + curr, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));

// Find maximal number
function findMax(arr: number[]): number {
  return Math.max(...arr);
}
console.log(findMax([1, 2, 3, 4, 5]));

// Filter even number
function evenNumber(arr: number[]): number[] {
  const evenNumber = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumber.push(arr[i]);
    }
  }
  return evenNumber;

  // return arr.filter((value) => value % 2 === 0);
}
console.log(evenNumber([1, 2, 3, 4, 5, 6]));

// Double each number
function doubledArray(arr: number[]): number[] {
  return arr.map((value) => value * 2);
}
console.log(doubledArray([1, 2, 3, 4, 5]));

// Contain value
function containValue(arr: number[], target: number): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;

  // return arr.includes(target)
}
console.log(containValue([1, 2, 3], 1));
console.log(containValue([1, 2, 3], 4));

// Return first three
function firstThree(arr: number[]): number[] {
  return arr.slice(0, 3);
}
console.log(firstThree([1, 2, 3, 4, 5]));

// Count specific character
function countChar(str: string, char: string): number {
  return str.split("").filter((c) => c === char).length;
  // return str.split(char).length - 1;
}
console.log(countChar("String", "S"));

// Remove spaces
function removeSpaces(str: string): string {
  return str.replaceAll(" ", "");
}
console.log(removeSpaces("Hello World"));

// Get first word
function firstWord(str: string): string {
  return str.split(" ")[0];
}
console.log(firstWord("Hello World"));

// Check if string contains word
function strContain(str: string, word: string): boolean {
  return str.includes(word);
}
console.log(strContain("Hello World", "Hello"));
console.log(strContain("Hello World", "World"));
console.log(strContain("Hello World", "Typescript"));

// Repeat string
function repeatString(str: string, times: number): string {
  return str.repeat(times);
}
console.log(repeatString("Hello World", 4));

// Get last character
function getLastChar(str: string): string {
  return str[str.length - 1];
}
console.log(getLastChar("Hello"));

// Get last element
function getLastElement(arr: number[]): number | undefined {
  return arr[arr.length - 1];
}
console.log(getLastElement([1, 2, 3, 4, 5]));

// Count elements
function countElement(arr: number[]): number {
  return arr.length;
}
console.log(countElement([1, 2, 3]));

// Check if all positive
function allPositive(arr: number[]): boolean {
  return arr.every((value) => value > 0);
}
console.log(allPositive([1, 2, 3, 4, 5]));
console.log(allPositive([-1, 2, 3, 4, 5]));

// Check if any negative
function anyNegative(arr: number[]): boolean {
  return arr.some((value) => value < 0);
}
console.log(anyNegative([1, 2, 3, 4, 5]));
console.log(anyNegative([-1, 2, 3, 4, 5]));

// Add number to each element
function addNumber(arr: number[], number: number): number[] {
  return arr.map((value) => value + number);
}
console.log(addNumber([1, 2, 3, 4, 5], 5));

// Get odd number
function getOdd(arr: number[]): number[] {
  return arr.filter((value) => value % 2 !== 0);
}
console.log(getOdd([1, 2, 3, 4, 5]));

// Combine two array
function combine(arr1: number[], arr2: number[]): number[] {
  // return arr1.join(arr2);
  return [...arr1, ...arr2];
}
console.log(combine([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));

// Find index of element
function findIndex(arr: number[], value: number): number {
  return arr.indexOf(value);
}
console.log(findIndex([1, 2, 3, 4, 5], 1));

// Convert array to string
function arrayToString(arr: number[]): string {
  return arr.join(",");
}
console.log(arrayToString([1, 2, 3, 4, 5]));
