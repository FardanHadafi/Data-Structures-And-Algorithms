/** Arrays & Strings
 *  Core Operations:
 * - Access: O(1);
 * - Search: O(n);
 * - Insert / Delete: O(n) - Requires shifting
 */

// Key Techniques:
// 1. In-place-modifications - save space
// Reverse Array in Place
function reverse(arr: number[]): void {
  let left: number = 0;
  let right: number = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

// 2. Prefix Sum - Range Queries in O(1);
function buildPrefixSum(arr: number[]): number[] {
  const prefix: number[] = [0];

  for (const num of arr) {
    prefix.push(prefix[prefix.length - 1] + num);
  }
  return prefix;
}
// Sum from i to j: prefix[j + 1] - prefix[i];
function rangeSum(prefix: number[], i: number, j: number): number {
  return prefix[j + 1] - prefix[i];
}

// 3. Kadane's Algorithm - Maximum subarray sum
function maxSubArray(nums: number[]): number {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

/** Must-Know Array Problems
1. Two Sum (use hash table)
2. Best Time to Buy/Sell Stock
3. Maximum Subarray (Kadane's)
4. Product of Array Except Self
5. Container With Most Water

String-Specific Tips
1. Strings are immutable - convert to array for modifications
2. Character frequency: use Map or array for lowercase letters
3. Palindrome checks: two pointers from ends
4. Anagrams: sort or frequency count */
