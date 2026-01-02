// given integer is n and find factorial of n.

const factorial = (n) => {
     let result = 1;

    for (let i = n; i > 0; i--) {
        result = result  * i
    }
  
  return result
}

// O notation of this code is O(n) because we have a single loop that runs n times.