const recursiveBinarySearch = (array, target) =>{
    return search(array,target,0,array.length - 1);
}


const search = (array,target,leftIndex,rightIndex) =>{
    let middleIndex = Math.floor((leftIndex+rightIndex)/2);

    if(array[middleIndex] === target){
        return middleIndex
    }

    if(target < array[middleIndex]){
        return search(array,target,leftIndex,middleIndex - 1)
    }else{
        return search(array,target,middleIndex+1,rightIndex)
    }
}

// Time complexity is Object(logn) for here too 