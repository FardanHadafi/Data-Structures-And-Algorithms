/** How it works :
 * 1. Start: One pointer at the beginning (left = 0), one pointer at the end (right = n.length - 1)
 * 2. Movement: Pointers move toward each other
 * 3. Stop: When left >= right
 *
 * When to use:
 * - Array/String is sorted or order matters
 * - Looking for pairs that satisfy a condition
 * - Need to work from both ends simultaneously
 * - Reversing or palindrome problems
 */

/** Example 1: Two Sum
 *  Problem: Find two numbers that add up to target
 */
function twoSum(arr: number[], target: number): number[] {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++; // Need larger sum
    } else {
      right--; // Need smaller sum
    }
  }
  return []; // If no desired indices
}

/** Example 2: Container With Most Water
 *  Problem: Find two lines that form a container with maximum water
 */
function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    // Calculate current area
    const width = right - left;
    const h = Math.min(height[left], height[right]);
    const area = width * h;
    maxWater = Math.max(maxWater, area);
    // Move the pointer with smaller height
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
}

/** Example 3: Valid Palindrome */
function isPalindrome(s: string): boolean {
  // Clean string: only alphanumeric, lowercase
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
