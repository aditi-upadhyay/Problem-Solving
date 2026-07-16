/*Move all Zeros to the end of the array
Problem Statement: You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order.

Examples
Input: 1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
Output: 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
Explanation: All the zeros are moved to the end and non-negative integers are moved to front by maintaining order
Input : 1,2,0,1,0,4,0
Output: 1,2,1,4,0,0,0
Explanation : All the zeros are moved to the end and non-negative integers are moved to front by maintaining order */

// function move0AtTheEnd(nums){
//     for(let i=0;i<nums.length -1; i++){
//         if(nums[i]=== 0){
//             nums.push(nums[i])
//             nums.splice(i,1)
//         } //has bug for [0,0,1]
//     }
//     return nums
// }

function twoPointer(nums){
    let j = 0
    for(let i=0;i<nums.length; i++){
        if(nums[i]!== 0){
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++
        }
    }
    return nums
}

console.log(twoPointer([1,2,0,1,0,4,0]))

