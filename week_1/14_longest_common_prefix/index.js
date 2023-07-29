/*
    Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".

    Time complexity: O(n)
    Space complexity: O(1)
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }
    let ans = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(ans) !== 0) {
            console.log(`strs[${i}]: `, strs[i], "ans: ", ans);
            ans = ans.substring(0, ans.length - 1);
            if (ans === '') {
                return '';
            }
        }
    }
    return ans;
};

console.log(longestCommonPrefix(["flower","floght", "flow", "flck"]));
// console.log(longestCommonPrefix(["flow", "flower","floght"]));

// console.log(longestCommonPrefix(["dog","racecar","car"]));
// console.log(longestCommonPrefix(["",""]));
// console.log(longestCommonPrefix(["flower","flower","flower","flower"]));