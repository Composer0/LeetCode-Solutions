/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var nums = [2,9,11,15]; //this is what the code was running against.


//Solution

 var twoSum = function(nums, target) {
    let map = new Map; //Map constructor creates a new Map object. I am assuming this takes the values presented in nums and creates an array from them to be manipulated in the code below.
    for (var i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
         if (map.has(complement)) { //has() method checks whether an element with a specified value exists in a set or not. It returns a boolean value to inform of presence.
        return [map.get(complement), i] //get method returns a specified element form a Map object.
    }
        map.set(nums[i], i)  //set method checks if a value is in a Set object, using an approach that is, on average, quicker than testing most of the elemnts that have previously been added to the Set object.
    }
};

//Solution

// Question

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

 

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].


// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].


// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]