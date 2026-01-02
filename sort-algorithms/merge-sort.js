// given an array of integers sort the array.
// First we divide array into sub arrays each contain only
// 1 element . Repeatedly merge the sub arrays to produce
// new sorted sub arrays until only 1 subarray we have

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const merge = (leftArr, rightArr) => {
  const sortedArray = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArray.push(leftArr.shift());
    } else {
      sortedArray.push(rightArr.shift());
    }
  }

  return [...sortedArray, ...leftArr, ...rightArr];
};


// | ------------ | --------------- |
// | Best Case    | **O(n log n)**  |
// | Average Case | **O(n log n)**  |
// | Worst Case   | **O(n log n)**  |


