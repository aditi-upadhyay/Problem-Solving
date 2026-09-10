function twoSum(input, target){

    const map = {}

    for(let i = 0; i<input.length; i++){
        const complement = target - input[i]
        
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }
        
        map[input[i]] = i
    }
}

console.log(twoSum([2, 3, 5, 6],11))