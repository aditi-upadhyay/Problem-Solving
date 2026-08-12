function reArrange(input) {
    let j = 1
    for(let i = 0; i<input.length; i++) {
        const currentElement = input[i]
        const nextElement = input[i+1]
        const previousElement = input[i-1]
 
        const isCurrentElementPositive = currentElement > 0
        const isPreviousElementPositive = previousElement > 0
        const isNextElementNegative = nextElement < 0
        console.log("isCurrentElementPositive",currentElement,input,isCurrentElementPositive,isPreviousElementPositive,isNextElementNegative);
 
        if(isCurrentElementPositive && isPreviousElementPositive && isNextElementNegative){
            console.log("swap +ve with -ve", currentElement, nextElement);
            input[i] = nextElement
            input[i+1] = currentElement
            // j++
        }
 
        if(!isCurrentElementPositive && !isPreviousElementPositive && !isNextElementNegative){
            console.log("swap -ve with -ve", currentElement, nextElement);
            input[i] = nextElement
            input[i+1] = currentElement
        }
    }
    return "input";
}
 
console.log(reArrange([1,2,-3,-1,-2,3]));
 