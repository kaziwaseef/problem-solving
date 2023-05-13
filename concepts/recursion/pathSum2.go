// Paste in leetcode: https://leetcode.com/problems/path-sum-ii/description/

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func pathSum(root *TreeNode, targetSum int) [][]int {
	result := make([][]int, 0)
	path := make([]int, 0)
	findPath(root, targetSum, path, &result)
	return result
}

func findPath(node *TreeNode, targetSum int, path []int, res *[][]int) {
	if node == nil {
		return
	}
	path = append(path, node.Val)
	if node.Left == nil && node.Right == nil && targetSum == node.Val {
		*res = append(*res, append([]int{}, path...))
	}
	findPath(node.Left, targetSum-node.Val, path, res)
	findPath(node.Right, targetSum-node.Val, path, res)
	path = path[:len(path)-1]
}
