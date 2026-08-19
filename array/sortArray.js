/** Sort an array of 0s, 1s and 2s
Problem Statement: Given an array nums consisting of only 0, 1, or 2. 
Sort the array in non-decreasing order. The sorting must be done in-place, 
without making a copy of the original array. **/


function test(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] > input[j]) {
        let temp = input[i];
        input[i] = input[j];
        input[j] = temp;
      }
    }
  }
  return input;
}
console.log(test([1, 0, 2, 1, 0]));
