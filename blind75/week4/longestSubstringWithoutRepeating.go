import "strings"

// https://leetcode.com/problems/longest-substring-without-repeating-characters/
func lengthOfLongestSubstring(s string) int {
	if s == "" {
		return 0
	}
	currentSubstring := string(s[0])
	substringLength := 0
	for i := 0; i < len(s); i++ {
		str := string(s[i])
		foundIndex := strings.Index(currentSubstring, str)
		if foundIndex != -1 {
			if len(currentSubstring) > substringLength {
				substringLength = len(currentSubstring)
			}
			currentSubstring = string(currentSubstring[foundIndex+1:]) + str
		} else {
			currentSubstring = currentSubstring + str
		}
	}
	if len(currentSubstring) > substringLength {
		substringLength = len(currentSubstring)
	}
	return substringLength
}
