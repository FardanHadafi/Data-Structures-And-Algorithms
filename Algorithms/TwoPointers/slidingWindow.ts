/** Sliding Window
 * How it Works:
 * 1. Window: A range [left, right] in the array
 * 2. Movement: Expand window (right++), shrink window (left++)
 * 3. Purpose: Find subarray/substring that satisfy conditions
 *
 * When to use:
 * - Contiguous subarray/substring problem
 * - Finding maximum/minimum window size
 * - Problem with "sum", "product", or "character count" constraint
 * - Find longest/shortest substring/subarray that ....
 *
 * Two Types of Sliding Window
 * 1. Fixed Size Window
 *  - Window size is constant, slide it across array.
 * 2. Variable Size Window
 *  - Window grows and shrinks based on conditions
 */

/** Example 1: Maximum Sum of Subarray
 *  Problem: Find maximum sum of k consecutive elements
 */
function maxSumSubArray(arr: number[], k: number): number {
  if (arr.length < k) return -1;

  let windowSum = 0;
  let maxSum = 0;

  // Calculate first window
  for (let i = 0; i < k; i++) {
    windowSum = arr[i];
  }
  maxSum = windowSum;

  // Slide window
  for (let i = k; i < arr.length - 1; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

/** Example 2: Longest Substring Without Repeating Characters
 *  Problem: Find length of longest substring without duplicates
 */
function longestSubstring(s: string): number {
  const seen = new Set<string>();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    // Shrink window until no duplicates
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    // Add current character
    seen.add(s[right]);
    // Update max length
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

/** Example 3: Maximum Average Subarray */
function maxAverage(nums: number[], k: number): number {
  let windowSum = 0;
  // First window
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }
  let maxSum = windowSum;
  // Slide window
  for (let i = k; i < nums.length; i++) {
    windowSum = windowSum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum / k;
}
