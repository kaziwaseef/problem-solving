// Paste in leetcode: https://leetcode.com/problems/valid-palindrome

import (
	"regexp"
	"strings"
)

func reverse(str string) (result string) {
	for _, v := range str {
		result = string(v) + result
	}
	return
}
func isPalindrome(s string) bool {
	nonAlphanumericRegex := regexp.MustCompile(`[^a-zA-Z0-9 ]+`)
	s = nonAlphanumericRegex.ReplaceAllString(s, "")
	s = strings.Replace(s, " ", "", -1)
	s = strings.ToLower(s)
	sLen := len(s)
	if sLen <= 1 {
		return true
	}
	isEven := sLen%2 == 0
	var leftString string
	var rightString string
	if isEven {
		leftString = s[:(sLen / 2)]
		rightString = s[(sLen / 2):]
	} else {
		leftString = s[:((sLen - 1) / 2)]
		rightString = s[((sLen-1)/2)+1:]
	}
	rightString = reverse(rightString)
	if leftString == rightString {
		return true
	}
	return false
}
