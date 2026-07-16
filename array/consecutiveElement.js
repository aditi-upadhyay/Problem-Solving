/** Given a binary array nums, return the maximum number of consecutive 1s in the array.
A binary array is an array that contains only 0s and 1s.
    Example 1
    Input: nums = [1, 1, 0, 0, 1, 1, 1, 0]
    Output: 3
    Explanation:
    The maximum consecutive 1s are present from index 4 to index 6, amounting to 3 1s

    Example 2
    Input: nums = [0, 0, 0, 0, 0, 0, 0, 0]
    Output: 0
Explanation: No 1s are present in nums, thus we return 0 */ 

function consecutiveElem(nums){
    let currentCount = 0
    let maxCount = 0
    for(let i=0;i<nums.length;i++){
        currentCount = nums[i] === 1 ? currentCount + 1 : 0 //if the number is 1 then increase the counter as we want the counter but if the number is 0 we want 0 as output hence 0
        maxCount = Math.max(currentCount, maxCount) // get the maximum amongst the 2
    }
    return maxCount
}

console.log(consecutiveElem([1, 1, 0, 0, 1, 1, 1, 0]))