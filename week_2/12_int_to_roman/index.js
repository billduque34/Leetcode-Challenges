/* 
    The problem is in problem.txt
    
    Time complexity: O(1)
*/
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
    const hrds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
    const thds = ["", "M", "MM", "MMM"]

    return thds[Math.floor(num/1000)%10] + hrds[Math.floor(num/100)%10] + tens[Math.floor(num/10)%10] + ones[Math.floor(num/1)%10]
};

console.log(intToRoman(3));
console.log(intToRoman(58));
console.log(intToRoman(1994));