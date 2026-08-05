/* Problem Statement: You have been given a 2-D array 'mat' of size 'N x M' where 'N' and 'M' denote the number of rows and columns, respectively.
// The elements of each row are sorted in non-decreasing order.
// Moreover, the first element of a row is greater than the last element of the previous row (if it exists).
// You are given an integer ‘target’, and your task is to find if it exists in the given 'mat' or not.
 
// Examples
// Input :mat = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12] ], target = 8
// Output :True.
// Explanation :The target = 8 exists in the 'mat' at index (1, 3).
 
// Input :mat = [ [1, 2, 4], [6, 7, 8], [9, 10, 34] ], target = 78
// Output :false.
 Explanation :The target = 78 does not exist in the 'mat'. Therefore in the output, we see 'false'.
 
[
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]
 
 
function findElement(input, target){
    for(let i = 0; i < input.length; i++){
        console.log("--------------------------------NEW------------------------");
        for(let j = 0; j < input[i].length; j++){
            console.log(input[i][j], i, j, input[i].length, "--------------last element--------------",input[i][input[i].length - 1], "--------------target--------------", target >= input[i][input[i].length - 1]);
            if(input[i][j] === target){
                console.log("-----------------target found--------------");
                return [i, j];
            }else if(target <= input[i][input[i].length - 1]){
                // loop through the row and check if the target is found
            }
            else{
                console.log("----------------skip this loop --------------");
                break;
            }
        }
    }
    return false;
}
 
 
console.log(findElement([ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12] ], 8));
 
*/
 
function findElement(mat, target) {
    const rows = mat.length;
    const cols = mat[0].length;
    let low = 0;
    let high = rows * cols - 1;
    console.log("--------------low--------------", low, "--------------high--------------", high);
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const row = Math.floor(mid / cols);
      const col = mid % cols;
      const val = mat[row][col];
 
      if (val === target) return true;
      if (val < target) low = mid + 1;
      else high = mid - 1;
    }
 
    return false;
  }
 
  console.log(findElement([ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12] ], 8));
 