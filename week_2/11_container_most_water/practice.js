var maxArea = function(height) {
    let max = 0
    let left = 0 
    let right = height.length - 1

    while (left < right) {
        let result = Math.min(height[left], height[right]) * (right - left)
        max = Math.max(max, result)
        if (height[left] >= height[right]) {
            right--
        } else {
            left++
        }
    }
    return max
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));