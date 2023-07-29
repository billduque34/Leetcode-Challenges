/* 
    The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows 
    like this: (you may want to display this pattern in a fixed font for better legibility)

    P   A   H   N
    A P L S I I G
    Y   I   R

    And then read line by line: "PAHNAPLSIIGYIR"
    INPUT: s = "PAYPALISHIRING", numRows = 3

    Time complexity: O(n)
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let indexFirstRow = (numRows - 1) * 2
    let i = 0
    let row = 1
    let str = ""

    if (numRows === 1) {
        return s
    }
    while (row <= numRows) {
        
        if (row === 1) str += s[i]

        if (row > 1) {        
            if (
                row !== numRows 
                && i-row+1 > 0 
            ) str += s[i-row+1]

            if (i+m-1 < s.length) str += s[i+row-1]
            
        }

        i += indexFirstRow

        if (
            i-row+1 < s.length 
            && i >= s.length 
            && row !== numRows
        ) str += s[i-row+1]

        if(i >= s.length) {
            i = 0
            row++
        }
        
    }
    return str
};