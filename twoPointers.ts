function twoSum(arr: number[], target: number): number[] {
  let left: number = 0;
  let right: number = arr.length - 1;

  while (left < right) {
    const sum: number = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right++;
    }
  }
  return [];
}

function mostWater(arr: number[]): number {
  let left = 0;
  let right = arr.length - 1;
  let maxWater = 0;

  while (left < right) {
    const length = right - left;
    const height = Math.min(arr[left], arr[right]);
    const area = length * height;
    maxWater = Math.max(maxWater, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
}

function isPalindrome(s: string): boolean {
  const cleaned: string = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left: number = 0;
  let right: number = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

function removeDuplicates(arr: number[]): number {
  if (arr.length === 0) return 0;
  let left: number = 0;
  for (let right = 1; right < arr.length; right++) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    }
  }
  return left + 1;
}

function removeZeroes(arr: number[]): number[] {
  let left: number = 0;
  let right: number = arr.length - 1;

  while (left < right) {
    if (arr[right] !== 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      right--;
    }
  }
}
