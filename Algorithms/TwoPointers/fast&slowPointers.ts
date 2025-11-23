/** Fast & Slow Pointers
 * How it works:
 * 1. Start: Both pointers at the beginning (or specific positions)
 * 2. Movement: One pointer move faster than the other
 * 3. Purpose: Create a "GAP" to detect a pattern or modify array in place
 *
 * When to use:
 * - In-Place array modification (remove elements, move zeros)
 * - Detect cycles (in linked lists)
 * - Find middle element
 * - Remove duplicates from sorted array
 */

/** Example 1: Remove Duplicates from Sorted Array
 *  Problem: Remove duplicates in place, return new length
 */
function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  let slow = 0; // Pointers to last unique element
  for (let fast = 1; fast < nums.length - 1; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
}

/** Example 2: Move Zeros to End
 *  Problem: Move all zeros to end while maintaining the order
 */
function moveZeroes(nums: number[]): void {
  let slow = 0; // Position for next non-zero
  // Fast finds non-zero elements
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      // Swap
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
  }
}

/** Example 3: Remove Element
 *  Problem: Remove all instance of "val" in place
 */
function removeElement(nums: number[], val: number): number {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
  }
  return slow;
}

/** Example 4: Linked List Cycle Detection (Floyd's Algorithm) */
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow!.next; // Move 1 step
    fast = fast.next.next; // Move 2 step

    if (slow === fast) {
      return true; // Cycle detected;
    }
  }
  return false; // No cycle
}
