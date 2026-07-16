// function rotateArray(nums, k, rotation){

//     for(let i=0;i<k;i++){
//             if(rotation === 'right'){
//                 nums.unshift(nums[nums.length - 1])
//                 nums.splice(nums.length - 1,1)
//             }else{
//                 nums.push(nums[0])
//                 nums.splice(0,1)
//             }
//     }
//     return nums
// }

// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 2, 'left'))
function reverseArr(nums, k, rotation) {
    let n = nums.length
    k = k % n;
  
    function reverse(arr, start, end) {
      while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    }
  
    if (rotation === "left") {
      reverse(nums, 0, k - 1);
      console.log(nums)
      reverse(nums, k, n - 1);
      console.log(nums)
      reverse(nums, 0, n - 1);
      console.log(nums)
    } else {
      reverse(nums, 0, n - 1);
      console.log(nums)

      reverse(nums, 0, k - 1);
      console.log(nums)
      reverse(nums, k, n - 1);
      console.log(nums)
    }
  
    return nums;
  }

console.log(reverseArr([1, 2, 3, 4, 5, 6, 7], 2, "right"));
