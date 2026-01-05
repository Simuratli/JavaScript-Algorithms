// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const twoSum = (nums, target) => {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result = [i, j];
      }
    }
  }

  return result;
};

//  in here time complxityity: O(n^2)

// Optimized Solution:


const twoSumOptimized = (nums, target) => {
    const numMap = new Map();
    
    for(let i =0; i< nums.length; i++){
        const complement = target - nums[i];
        if(numMap.has(complement)){
            return [numMap.get(complement), i];
        }

        numMap.set(nums[i], i);
    }

    return []
}

// in here time complexity: O(n)