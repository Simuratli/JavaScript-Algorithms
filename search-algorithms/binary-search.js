const binarySearch = (array,target) => {
    let leftIndex = 0; 
    let rightIndex = array.length - 1;

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((rightIndex + leftIndex) / 2);
        if(array[middleIndex] === target) {
            return middleIndex
        }

        if(target > array[middleIndex]){
            leftIndex = middleIndex + 1;
        }else{
            rightIndex = middleIndex - 1
        }
    }

    return - 1
}

// Time complexity is O(logn) because it reduce to half 