// https://leetcode.com/problems/3sum
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const answer: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue;
    let elem = -nums[i];
    let lIndex = i + 1;
    let rIndex = nums.length - 1;
    while (lIndex < rIndex) {
      if (lIndex > i + 1 && nums[lIndex - 1] === nums[lIndex]) {
        lIndex += 1;
        continue;
      }
      let sum = nums[lIndex] + nums[rIndex];
      if (sum === elem) {
        answer.push([nums[lIndex], nums[i], nums[rIndex]]);
        lIndex += 1;
      }
      if (sum < elem) {
        lIndex += 1;
      } else {
        rIndex -= 1;
      }
    }
  }
  return answer;
}
