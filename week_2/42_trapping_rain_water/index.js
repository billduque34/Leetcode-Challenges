/*
    Given n non-negative integers representing an elevation map where the width of each bar is 1, 
    compute how much water it can trap after raining.

    Time complexity: O(n)
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let water = 0
    let left = 0
    let right = height.length - 1
    let left_max = 0
    let right_max = 0

    while(left < right) {
        if(height[left] <= height[right]) {
            if(height[left] > left_max) {
                left_max = height[left]
            } else {
                water += left_max - height[left]
            }
            left++
        } else {
            if(height[right] > right_max) {
                right_max = height[right]
            } else {
                water += right_max - height[right]
            }
            right--
        }
    }

    return water
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([4,2,0,3,2,5]));
