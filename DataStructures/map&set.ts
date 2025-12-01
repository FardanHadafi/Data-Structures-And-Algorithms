/** Hash Tables (Map & Set)
 * When to use:
 * 1. Need O(1) lookup or Insert
 * 2. Count Frequencies
 * 3. Find Duplicates
 * 4. Cache or Memoization
 * 5. Group Items
 */
// Common Patterns
// 1. Frequency Counter
function canConstruct(ransomNote: string, magazine: string): boolean {
  const counts = new Map<string, number>();

  // Build frequency map
  for (const chars of magazine) {
    counts.set(chars, (counts.get(chars) || 0) + 1);
  }

  // Check if we can construct
  for (const char of ransomNote) {
    if (!counts.get(char)) {
      return false;
    }
    counts.set(char, counts.get(char)! - 1);
  }
  return true;
}

// 2. Complement or Pair Finding
function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (seen.has(complement)) {
      return [seen.get(complement)!, i];
    }
    seen.set(nums[i], i);
  }
  return [];
}

// 3. Grouping or Categorization
function findAnagrams(strs: string[]): string[][] {
  const groups = new Map<string, string[]>();

  for (const str of strs) {
    // Sort string to create key
    const key = str.split("").sort().join("");

    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)!.push(str);
  }
  return Array.from(groups.values());
}

/** Must know Hash Table problems
 *  1. Two Sum
 *  2. Group Anagrams
 *  3. Valid Anagram
 *  4. First Unique Character
 *  5. Subarray Sum Equals K
 */
