// Paste in leetcode: https://leetcode.com/problems/group-anagrams/

function isAnagram(str1: string, str2: string): boolean {
  if (str1 === str2) {
    return true;
  }
  if (str1.length !== str2.length) {
    return false;
  }
  const strMap = new Map<string, number>();
  for (let i = 0; i < str1.length; i++) {
    if (strMap.has(str1[i])) {
      strMap.set(str1[i], strMap.get(str1[i])! + 1);
    } else {
      strMap.set(str1[i], 1);
    }
  }
  for (let j = 0; j < str2.length; j++) {
    if (!strMap.has(str2[j])) {
      return false;
    }
    if (strMap.get(str2[j]) === 1) {
      strMap.delete(str2[j]);
    } else {
      strMap.set(str2[j], strMap.get(str2[j])! - 1);
    }
  }
  if (strMap.size === 0) {
    return true;
  }
  return false;
}
function groupAnagrams(strs: string[]): string[][] {
  if (strs.length === 1) {
    return [strs];
  }
  const anagrams: string[][] = [];

  for (let i = 0; i < strs.length; i++) {
    const elem = strs[i];
    const index = anagrams.findIndex((v) => {
      if (isAnagram(v[0], elem)) {
        return true;
      }
      return false;
    });
    if (index === -1) {
      anagrams.push([elem]);
    } else {
      anagrams[index].push(elem);
    }
  }

  return anagrams;
}
