function twoSumExists(arr, target) {
    // Create array of [value, originalIndex] pairs to keep track of original positions
    let numsWithIndex = arr.map((val, idx) => [val, idx]);
    
    // Sort array by the value to apply two-pointer technique
    numsWithIndex.sort((a, b) => a[0] - b[0]);

    // Initialize pointers at start and end of the array
    let left = 0, right = arr.length - 1;

    // Loop until pointers cross
    while (left < right) {
        // Calculate current sum of the two values
        let sum = numsWithIndex[left][0] + numsWithIndex[right][0];

        if (sum === target) {
            // Found a pair with sum equal to target
            return "YES";
        } else if (sum < target) {
            // Sum too small, move left pointer to right to increase sum
            left++;
        } else {
            // Sum too large, move right pointer to left to decrease sum
            right--;
        }
    }
    
    // No pair found
    return "NO";
}

console.log(twoSumExists([2,6,5,8,11], 14))