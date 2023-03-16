// Paste in leetcode: https://leetcode.com/problems/two-sum

func twoSum(nums []int, target int) []int {
	visited := make(map[int]int)
	for i := range nums {
		num := nums[i]
		elem, ok := visited[target-num]
		if ok {
			return []int{elem, i}
		}
		visited[num] = i
	}
	return []int{}
}
