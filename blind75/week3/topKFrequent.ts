// Paste in leetcode: https://leetcode.com/problems/top-k-frequent-elements

function topKFrequent(nums: number[], k: number): number[] {
  const frequencyMap = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    if (frequencyMap.has(nums[i])) {
      const val = frequencyMap.get(nums[i])!;
      frequencyMap.set(nums[i], val + 1);
    } else {
      frequencyMap.set(nums[i], 1);
    }
  }
  const frequencyArray: { v: number; k: number }[] = [];
  frequencyMap.forEach((v, k) => {
    frequencyArray.push({ v, k });
  });
  frequencyArray.sort((a, b) => b.v - a.v);
  frequencyArray.length = k;
  return frequencyArray.map(({ k }) => k);
}
