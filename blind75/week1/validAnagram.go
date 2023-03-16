// Paste in leetcode: https://leetcode.com/problems/valid-anagram/
import (
	"strings"
)

func isAnagram(s string, t string) bool {
	sStr := strings.Split(s, "")
	tStr := strings.Split(t, "")
	letters := make(map[string]int)
	for i := 0; i < len(sStr); i++ {
		if v, exists := letters[sStr[i]]; exists {
			letters[sStr[i]] = v + 1
		} else {
			letters[sStr[i]] = 1
		}
	}
	for i := 0; i < len(tStr); i++ {
		if letters[tStr[i]] == 1 {
			delete(letters, tStr[i])
		} else {
			letters[tStr[i]] -= 1
		}
	}
	if len(letters) > 0 {
		return false
	}
	return true
}
