// Paste in leetcode: https://leetcode.com/problems/valid-parentheses/
function isValid(s: string): boolean {
  let compArr: string[] = [];
  if ([")", "}", "]"].includes(s[0])) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case ")":
        if (compArr[0] === "(") {
          compArr.shift();
          continue;
        }
        return false;
      case "}":
        if (compArr[0] === "{") {
          compArr.shift();
          continue;
        }
        return false;
      case "]":
        if (compArr[0] === "[") {
          compArr.shift();
          continue;
        }
        return false;
    }
    compArr.unshift(s[i]);
  }
  if (compArr.length === 0) {
    return true;
  }
  return false;
}
