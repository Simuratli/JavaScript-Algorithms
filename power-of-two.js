// problem : given a positive integer n, determine if it is a power of two.
// An integer n is a power of two, if there exists an integer x such that n == 2^x.
// isPowerOfTwo(1) // true, because 2^0 = 1
// isPowerOfTwo(16) // true, because 2^4 = 16
// isPowerOfTwo(3) // false, because there is no integer x such that 2^x = 3


const isPowerOfTwo = (n) => {
    if (n <= 0) return false;

    while (n > 1) {
        if (n % 2 !== 0) return false;
        n = n / 2;
    }
    return true;
}

// Big-O notation: O(log n) b ecause each iteration divides n by 2 until it reaches 1.


const isPowerOfTwoBitwise = (n) => {
    if (n <= 0) return false;
    return n & (n-1) === 0
}

// explanation 
// 1 -> 1
// 2 -> 10
// 3 -> 100
// 4 -> 1000
// in binary

// Big-O notation: O(1) because bitwise operations are constant time operations.