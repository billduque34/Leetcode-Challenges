/*
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
    determine if the input string is valid.

    An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

    Time complexity: O(n)
    Space complexity: O(n)
*/

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    const stack = []
    for (const c of s) {
      if (c === '{' || 
        c === '[' || 
        c === '(') {
          stack.push(c)
      } else {
        if (!stack.length ||
          (c === '}' && stack[stack.length - 1] !== '{') ||
          (c === ']' && stack[stack.length - 1] !== '[') ||
          (c === ')' && stack[stack.length - 1] !== '(') 
        ) {
            return false
        }
        stack.pop()
      }
    }
    return !stack.length
};


console.log(isValid("()[]{}"));
console.log(isValid("()"));
console.log(isValid("(]"));
console.log(isValid("{[]}"));