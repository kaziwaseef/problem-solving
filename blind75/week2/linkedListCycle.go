// Paste in leetcode: https://leetcode.com/problems/linked-list-cycle/
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func hasCycle(head *ListNode) bool {
	if head == nil || head.Next == nil {
		return false
	}
	slow := head
	fast := head.Next

	for fast.Next != nil && fast.Next.Next != nil && fast != slow {
		slow = slow.Next
		fast = fast.Next.Next
	}

	return slow == fast
}
