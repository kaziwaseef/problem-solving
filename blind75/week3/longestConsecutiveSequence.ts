// Paste in leetcode: https://leetcode.com/problems/longest-consecutive-sequence/

function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return 1;
  }
  const set = new Set<number>(nums);
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      count = 0;
      let temp = nums[i];
      while (set.has(temp)) {
        count += 1;
        maxCount = Math.max(count, maxCount);
        temp += 1;
      }
    }
  }
  return maxCount;
}
