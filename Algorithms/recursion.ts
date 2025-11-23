// n! = n * n(-1) if n >= 1
// return 1 otherwise if n > 0
function factorial(n: number): number {
  // Assuming that n is a positive integer or 0
  if (n >= 1) {
    return n * factorial(n - 1);
  } else {
    return 1;
  }
}

// Fn = Fn-1 + Fn-2 if (n >= 3)
// return 1 otherwise if (n = 1 || 2)
function fibonacci(n: number): number {
  // Assuming that n is a positive integer or 0
  if (n >= 3) {
    return fibonacci(n - 1) + fibonacci(n - 2);
  } else {
    return 1;
  }
}

function sumOfArray(arr: number[]): number {
  // Base case: empty array
  if (arr.length === 0) {
    return 0;
  }

  // Recursive case: first element + sum of rest
  return arr[0] + sumOfArray(arr.slice(1));
}
console.log(factorial(5));
console.log(fibonacci(5));
console.log(sumOfArray([1, 2, 3, 4, 5]));

// ==== Types of Recursion ==== //
/** Direct Recursion
 *  when a function calls itself directly:
 */
function countdown(n: number): void {
  if (n < 0) return;
  console.log(n);
  countdown(n - 1);
}

/** Indirect Recursion
 *  when function call each other in a cycle:
 */
function isEven(n: number): boolean {
  if (n === 0) return true;
  return isOdd(n - 1);
}
function isOdd(n: number): boolean {
  if (n === 0) return false;
  return isEven(n - 1);
}
