// Paste in leetcode: https://leetcode.com/problems/contains-duplicate/
func containsDuplicate(nums []int) bool {
	intMap := make(map[int]bool)
	for i := 0; i < len(nums); i++ {
		if intMap[nums[i]] {
			return true
		}
		intMap[nums[i]] = true
	}
	return false
}
