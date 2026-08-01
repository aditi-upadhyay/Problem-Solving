function twoDArray(arr){
    arr.forEach((element) =>{
        element.forEach((item) =>{
            console.log(item)
        })
    })
}

console.log(twoDArray([[1,2,3],[4,5,6],[7,8,9]]))