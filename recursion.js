// recursive fibnacci 

const recursiveFibonacci = (n) => {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

// Big-O notation: O(2^n) because each call to the function results in two more calls until the base case is reached.
// it is not a good solution for large n due to exponential growth of calls.

// recursive factorial

const recursiveFactorial = (n) => {
    if(n<0) return null; 
    if (n === 0) return 1;
    return n * recursiveFactorial(n-1);
}

// big o is O(n) because each call to the function results in one more call until the base case is reached.