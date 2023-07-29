/*
    Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the 
    value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

    Time complexity: O(log(n)) or O(n)
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 0) return 0 

    const sign = x < 0 ? -1 : 1
    x = Math.abs(x)

    let rev = 0
    while (x !== 0) {
        let digit = x % 10
        rev = rev * 10 + digit
        x = Math.floor(x / 10)
    }
    const result = rev * sign
    return result > 2 ** 31 - 1 || result < -(2 ** 31) ? 0 : result
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
