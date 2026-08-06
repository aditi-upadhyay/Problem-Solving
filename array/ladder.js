/*
A leader is an element in the array that is greater than all the elements to its right side.
In simple words: If no element to the right is bigger than it → it’s a leader
Example 1:
Input:
arr = [4, 7, 1, 0]  
Output:
7 1 0  
Explanation:
The rightmost element (0) is always a leader.  
7 and 1 are greater than the elements to their right, making them leaders as well.
Example 2:
Input:
arr = [10, 22, 12, 3, 0, 6]  
Output:
22 12 6  
Explanation:
6 is a leader because there are no elements after it.  
12 is greater than all the elements to its right (3, 0, 6), and 22 is greater than 12, 3, 0, 6,
making them leaders as well.
*/
function findLeaders(arr){
    let leaders = [];
    let j = 1;
    for(let i=0;i<arr.length;i++){
        if(arr[i] > arr[j]){ //check with next element
            leaders.push(arr[i]);
           
        }else if(arr.length-1 === i){
            leaders.push(arr[i]);
            break;
        }
        j++
    }
    return leaders;
}
 
console.log(findLeaders([4, 7, 1, 0]));