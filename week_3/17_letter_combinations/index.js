/*
    Given a string containing digits from 2-9 inclusive, return all possible letter 
    combinations that the number could represent. Return the answer in any order.

    A mapping of digits to letters (just like on the telephone buttons) is given below. 
    Note that 1 does not map to any letters.

    Time complexity: O(3^n) or O(4^n)
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];

    const phone_map = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    const output = [];
    backtrack("", digits, phone_map, output);
    return output;

    function backtrack(combination, next_digits, phone_map, output) {
        if (next_digits.length === 0) {
            output.push(combination);
        } else {
            const letters = phone_map[next_digits[0] - 2];
            for (const letter of letters) {
                backtrack(combination + letter, next_digits.slice(1), phone_map, output);
            }
        }
    }
};

console.log(letterCombinations("256"));