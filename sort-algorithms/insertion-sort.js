// given an array of integers sort the array.
// Insertion sort worl like: it split array into 2 part.
// sorted and unsorted parts. we assume that the first element already 
// sorted  and remaining elements unsorted. select unsorted element and compalre with all elements
// in sorted part 

const insertionSort = (arr) => {
    for(i = 1; i< arr.length; i++){
        let numberToInsert = arr[i];
        let j = i - 1; //index of before element
        while(j>=0 && arr[j] > numberToInsert){
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = numberToInsert
    }

    return arr
}

// Best case: O(n)

// Average case: O(n²)

// Worst case: O(n²)


const arr = [8 , 20, -2, -4, -6]