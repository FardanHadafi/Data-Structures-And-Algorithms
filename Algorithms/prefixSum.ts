// ============================================
// PREFIX SUM - COMPLETE GUIDE
// ============================================

// What is Prefix Sum?
// - A technique to precompute cumulative sums
// - Turns O(n) range sum queries into O(1)
// - Super simple but incredibly powerful!

// Core Idea:
// prefix[i] = sum of elements from index 0 to i
// prefix[i] = arr[0] + arr[1] + ... + arr[i]
function buildPrefixSum(arr: number[]): number[] {
  const prefix: number[] = new Array(arr.length);
  prefix[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }
  return prefix;
}

function rangeSum(prefix: number[], left: number, right: number): number {
  if (left === 0) return prefix[right];
  return prefix[right] - prefix[left - 1];
}
