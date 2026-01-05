// Problem : Given 2 finite non-empty sets. find Cartesian Product.
// in Math , sepcually in set theory The Cartesian product of two set A and B ,
// dednoted AxB is the set of all ordered pairs (a,b) where a is in A, b is in B

// const A = [1,2]
// const B = [3,4]
// AxB  = [1,3,1,4,2,3,2,4]
// Idea: Traverse each array and pair each element in first array with
// each array in the second array

const cartesianProduct = (arr1,arr2) => {
    const result = [];
    for(let i = 0; i<arr1.length; i++){
        for(let j = 0; j<arr2.length;j++){
            result.push([arr1[i],arr2[j]])
        }
    }

    return result;
}

// Time complexity is O(n^2) if both array length are equal;
// Time complexity is O(m*n) if both array length are not equal;

