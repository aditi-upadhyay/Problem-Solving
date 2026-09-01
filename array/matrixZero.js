function matrixZero(input){
    let elementIndex = -1
    for(let i=0; i<input.length;i++){
        console.log(input[i])
        if(input[i].includes(0)){
            for(let j = 0; j<input[i].length;j++){
                if(input[i][j] === 0 && elementIndex === -1){
                    elementIndex = j
                }
                input[i][j] = 0
                
            }
            break
        }
    }

    for(let i =0;i<input.length;i++){
        if(elementIndex){
            input[i][elementIndex] = 0
        }
    }
    return input
}

console.log(matrixZero([[1,1,1],[1,0,1],[1,1,1]]))