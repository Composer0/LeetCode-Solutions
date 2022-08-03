/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var nums = [2,9,11,15]; //this is what the code was running against.

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

//solution