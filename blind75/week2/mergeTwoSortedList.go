// Paste in leetcode: https://leetcode.com/problems/merge-two-sorted-lists/
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	if list1 == nil {
		return list2
	} else if list2 == nil {
		return list1
	}

	var root *ListNode

	if list1.Val > list2.Val {
		root = list2
		list2 = list2.Next
	} else {
		root = list1
		list1 = list1.Next
	}

	mergedList := root
	for list1 != nil && list2 != nil {
		if list1.Val > list2.Val {
			mergedList.Next = list2
			list2 = list2.Next
		} else {
			mergedList.Next = list1
			list1 = list1.Next
		}
		mergedList = mergedList.Next
	}
	if list1 == nil && list2 != nil {
		mergedList.Next = list2
	} else if list2 == nil && list1 != nil {
		mergedList.Next = list1
	}

	return root
}
