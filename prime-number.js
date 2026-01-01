// Problem: give a natural number n determine if the number is prime or not.Problem
// isPrime(5 ) = true because 5 is only divisible by 1 and 5.
// isPrime(4) = false because 4 is divisible by 1,2 and 4.

const isPrime = (n) => {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

isPrime(5);
isPrime(4);

// big o of this function is O(n) Linear

// Optimal solution of Primality test 
// Intereger larger than the square root of n do not need to be checked b because n = a* b one of the factopr a and b is less or equal to the square roiot of n

let isPrimeOptimal = (n) => {
    if (n < 2) return false;

    for(let i = 2; i <=Math.sqrt(n); i++){
        if(n % i === 0){
            return false
        }
    }
    return true;
}

// now is PrimeOptimal has big O of O(sqrt(n))

