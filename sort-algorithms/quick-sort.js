// given an array of integers sort the array.
// Identify Pivot element in array.
// Pivot :
// Pick first Element
// Pick last element (We select)
// Pick a random element
// Pick a median for pivot
// we pu everything that's smaller than pivot to left array and everything grater to right.

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

const arr = [8, 20, -2, 4, -6];
