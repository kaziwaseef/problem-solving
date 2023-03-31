function permute(nums: number[]): number[][] {
  const permutations: number[][] = [];
  const temp: number[] = [];
  const selectedMap = new Map<number, boolean>();
  computePermutation(nums, temp, permutations, selectedMap);
  return permutations;
}

function computePermutation(
  nums: number[],
  temp: number[],
  permutations: number[][],
  selectedMap: Map<number, boolean>
): void {
  if (temp.length === nums.length) {
    permutations.push([...temp]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (!selectedMap.get(i)) {
      selectedMap.set(i, true);
      temp.push(nums[i]);
      computePermutation(nums, temp, permutations, selectedMap);
      selectedMap.set(i, false);
      temp.pop();
    }
  }
}
