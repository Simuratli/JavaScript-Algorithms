// given number is n find the n th element of fibonacci sequence.
// in mathematics, the Fibonacci sequence is a series of numbers where a number is 
// found by adding up the two numbers before it. The sequence starts with 0 and 1. That is,

const fibonacci = (n) => {

    if(n <= 0) return "Input should be a positive integer";
    if(n === 1) return [0];
    if(n === 2) return [0,1];
    let start = [0,1];
    for (let i = 2; i < n; i++) {
        start[i] = start[i - 1] + start[i - 2];
    }
   
    return start;
}

// fibonacci O notation is O(n) linear