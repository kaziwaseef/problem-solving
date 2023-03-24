// Paste in leetcode: https://leetcode.com/problems/reverse-linked-list/
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseList(head *ListNode) *ListNode {
	if head == nil {
		return nil
	}
	var reversed *ListNode
	var next *ListNode
	for head != nil {
		next = head.Next
		head.Next = reversed
		reversed = head
		head = next
	}
	return reversed
}
