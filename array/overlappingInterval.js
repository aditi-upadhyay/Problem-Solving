function overlappingInterval(input){
    let newInterval = []
    let skipNext = false
    for(let i = 0; i< input.length; i++){
        let size = input[i].length - 1
        let firstElement = input[i][0]
        let lastElement = input[i][size]
        if(input.length > i+1){
            
            let nextIteration = input[i+1][0]

            if(skipNext){
                skipNext = false
            }else{
                let nextIterationLastElement = input[i+1][size]
                if(lastElement > nextIteration){
                    newInterval.push([firstElement,nextIterationLastElement])
                    skipNext = true
                }else{
                    newInterval.push([firstElement,lastElement])
                }
            }
            
        }else{
           newInterval.push([firstElement,lastElement])
        }
        
    }
    return newInterval
}

console.log(overlappingInterval([[1,3],[2,6],[8,10],[15,18]]))