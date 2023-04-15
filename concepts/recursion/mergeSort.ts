const merge = (arr1: number[], arr2: number[]): number[] => {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;
  let i = 0;
  let j = 0;
  const mergedArr: number[] = [];
  while (mergedArr.length < arr1.length + arr2.length) {
    if (arr1[i] > arr2[j]) {
      mergedArr.push(arr2[j]);
      j += 1;
    } else if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i += 1;
    } else {
      if (arr1[i]) {
        mergedArr.push(arr1[i]);
        i += 1;
      }
      if (arr2[j]) {
        mergedArr.push(arr2[j]);
        j += 1;
      }
    }
  }
  return mergedArr;
};

console.log(merge([1, 2, 3], [1, 3, 4]));
console.log(merge([1, 2], [1, 3, 4, 5]));
console.log(merge([1, 3, 4, 5], [1, 2]));
