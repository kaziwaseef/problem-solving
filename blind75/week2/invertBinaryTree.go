// Paste in leetcode: https://leetcode.com/problems/invert-binary-tree/
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func invertTree(root *TreeNode) *TreeNode {
	parse(root)
	return root
}

func parse(root *TreeNode) {
	if root == nil {
		return
	}
	tempLeft := root.Left
	tempRight := root.Right
	root.Right = tempLeft
	root.Left = tempRight
	parse(root.Left)
	parse(root.Right)
}
