/*
Find the number that appears once, and the other numbers twice
Problem Statement: Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.

Example 1:
Input Format: arr[] = {2,2,1}
Result: 1
Explanation: In this array, only the element 1 appear once and so it is the answer.


Example 2:
Input Format: arr[] = {4,1,2,1,2}
Result: 4
Explanation: In this array, only element 4 appear once and the other elements appear twice. So, 4 is the answer.
*/

function test(arr){
    console.log("arr", arr);
    let x = new Set();
    let unique = 0
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i], unique, x)
        if(!x.has(arr[i])){
            unique = arr[i]
            x.add(arr[i])
        }else{
            console.log("exists", arr[i])
            x.delete(arr[i])
        }
    }
    return x;
}
 
console.log(test([4,2,1,2,3,6,3,1,6]));