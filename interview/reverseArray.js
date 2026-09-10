function reverseArray(input){
    let j = input.length - 1

    for (let i = 0, j = input.length - 1; i < j; i++, j--) {
        [input[i], input[j]] = [input[j], input[i]]
    }
    return input
}

console.log(reverseArray([1, 2, 3, 4, 5]))