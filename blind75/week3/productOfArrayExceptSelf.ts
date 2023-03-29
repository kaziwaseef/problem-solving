// Paste in leetcode: https://leetcode.com/problems/product-of-array-except-self/

function productExceptSelf(nums: number[]): number[] {
  let fullProduct = 1;
  let isZero = false;
  let isMultipleZero = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      fullProduct *= nums[i];
    } else if (!isZero) {
      isZero = true;
    } else {
      isMultipleZero = true;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (isMultipleZero) {
      nums[i] = 0;
      continue;
    }
    if (nums[i] !== 0) {
      if (isZero) {
        nums[i] = 0;
      } else {
        nums[i] = fullProduct / nums[i];
      }
    } else {
      nums[i] = fullProduct;
    }
  }
  return nums;
}
