/* 
    The problem is in problem.txt
    
    Time complexity: O(n)
*/
/**
 * @param {string} s
 * @return {number}
 */

var myAtoi = function(s) {
    s = s.trim()
    let i = 0
    let sign = 1 
    let num = 0
    if (s === "") {
        return 0
    }

    if (s[i] === '+') {
        i++
    } else if (s[i] === '-') {
        i++
        sign = -1
    }

    while(i < s.length && /^\d$/.test(s[i])) {
        num = num * 10 + parseInt(s[i])
        i++
    }

    num *= sign
    return Math.min(Math.max(num, -(2 ** 31)), 2 ** 31 - 1)
};

console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));
console.log(myAtoi("+-12"));