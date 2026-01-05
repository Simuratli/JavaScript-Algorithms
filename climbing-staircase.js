// Problem: given a staircase of "n" steps , count the number of distinct ways to climb to the top.
// You can either climb 1 step or 2 steps at a time.
// n = 1 , climbStairscase(1) =  | (1);
// n = 2 , climbStairscase(2) =  | (1,1) , (2);
// n = 3 , climbStairscase(3) =  | (1,1,1) , (1,2) , (2,1);
// n = 4 , climbStairscase(4) =  | (1,1,1,1) , (1,1,2) , (1,2,1) , (2,1,1) , (2,2);

// if you have climb to step n we can only clib from step n-1 or step n-2;
// calculate ways we can climb to step n-1 and step n-2 and add them together to get ways to climb to step n and add 2

// climbingStaircase(n) = climbingStaircase(n-1) + climbingStaircase(n-2);;

const climbingStaircase = (n) => {
    const numberOfWays = [1,2];
    for(let i = 2; i< n; i++){
        numberOfWays[i] = numberOfWays[i-1] + numberOfWays[i-2];
    }
    return numberOfWays[n-1]
}

// Time complexitiy: O(n);