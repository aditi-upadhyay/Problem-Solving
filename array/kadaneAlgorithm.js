function kadaneAlgorithm(arr) {
    let maxSum = 0
    let sum = 0 
    for(let i=0; i<arr.length; i++) {
        sum += arr[i]
        if(sum > maxSum) {
            maxSum = sum
        }
        if(sum < 0) {
            sum = 0
        }
    }
    return maxSum
}

console.log(kadaneAlgorithm([2,3,-7,4,7,-4]));