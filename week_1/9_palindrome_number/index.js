/* 
    Given an integer x, return true if x is a 
    palindrome, and false otherwise. 

    Time complexity: O(log n)
*/


/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    const xToString = x.toString()
    let left = 0
    let right = xToString.length - 1

    while(left < right) {
      if (xToString[left] !== xToString[right]) return false
        left++
        right--
    }
    return true
};

console.log(isPalindrome(12321));
console.log(isPalindrome(-123));