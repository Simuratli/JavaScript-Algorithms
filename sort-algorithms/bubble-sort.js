// given an array of integers sort the array.
// buble sort sort array like one by one. for example in array[i] is higher than array[i+1]
// it swap their places until reach correct sort 
const bubbleSort = (arr) => {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true
      }
    }
  } while (swapped);
 

  return arr;
};


// Time complexity if bubbleSort is O(n^2)
