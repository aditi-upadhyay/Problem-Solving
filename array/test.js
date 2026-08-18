function test(input){
        for(let i = 0;i<input.length;i++){
            for(let j = i+1;j<input.length;j++){
                if(input[i] > input[j]){
                    let temp = input[i]
                    input[i] = input[j]
                    input[j] = temp
                }
            }
        }
        return input
    }
     
    console.log(test([1,0,2,1,0]))