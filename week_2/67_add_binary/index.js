/* 
    Given two binary strings a and b, return their sum as a binary string.

    Input: a = "11", b = "1"
    Output: "100"

    Time complexity: O(n)
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let maxLength = a.length 

    if (a.length > b.length) {
        b = "0".repeat(a.length - b.length) + b
    } else {
        maxLength = b.length
        a = "0".repeat(b.length - a.length) + a
    }
    let result = ""
    let carry = 0
    let sum = 0

    for(let i = maxLength - 1; i >= 0; i--) {
        sum = parseInt(a[i]) + parseInt(b[i]) + carry
        result = (sum % 2) + result
        carry = sum >= 2 ? 1 : 0 
    }

    if (carry === 1) {
        result = "1" + result
    }

    return result 
};

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
console.log(addBinary("101111", "10"));