/*Find the duplicate in an array of N+1 integers
Problem Statement: Given an array of N + 1 size, where each element is between 1 and N. 
Assuming there is only one duplicate number, your task is to find the duplicate number.
*/
function duplicateNumber(input) {
    let j = 1
    for(let i = 0; i<input.length ; i++){
        if(input[i] === input[j]) {
            return input[i]
        }
        j++
    }
    return null
}

console.log(duplicateNumber([1, 3, 4, 2, 2]))