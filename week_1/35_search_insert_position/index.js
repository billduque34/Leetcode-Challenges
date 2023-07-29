/* 
    Given a sorted array of distinct integers and a target value, 
    return the index if the target is found. If not, 
    return the index where it would be if it were inserted in order.

    You must write an algorithm with O(log n) runtime complexity.

    Time complexity: O(n)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {
    let start = 0, end = nums.length - 1
    let ans = nums.length

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if(nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            start = mid + 1
        } else {
            ans = mid
            end = mid - 1
        }
    }

    return ans
};