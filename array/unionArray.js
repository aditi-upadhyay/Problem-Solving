// function unionArray(arr1, arr2){
//     let x = new Set([...arr1, ...arr2])
//     return [...x]
// }

// console.log(unionArray([1,2,3,4,5], [2,3,4,4,5]))

function unionArray(arr1, arr2) {
    let i = 0, j = 0;
    let result = [];

    while (i < arr1.length && j < arr2.length) {
        let val;

        if (arr1[i] < arr2[j]) {
            val = arr1[i++];
        } else if (arr1[i] > arr2[j]) {
            val = arr2[j++];
        } else {
            val = arr1[i];
            i++; 
            j++;
        }

        if (result.length === 0 || result[result.length - 1] !== val) {
            result.push(val);
        }
    }

    while (i < arr1.length) {
        if (result[result.length - 1] !== arr1[i]) {
            result.push(arr1[i]);
        }
        i++;
    }

    while (j < arr2.length) {
        if (result[result.length - 1] !== arr2[j]) {
            result.push(arr2[j]);
        }
        j++;
    }

    return result;
}

console.log(unionArray([1,2,3,4,5], [2,3,4,4,5,6]))