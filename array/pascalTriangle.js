function pascalTriangle(n,r,c){
    let global = ''
    let answer 
    for (let i = 1; i <= n; i++) {
        let str = '';
        let a = global.split(' ').map(Number);
        let isTheCurrentRow = false
        if(i === r){
            isTheCurrentRow = true
        }
        for (let j = 1; j <= i; j++) {
            let above = a[j-1]
            let leftSide = a[j-2]
            let value = 0
            if(above===0 || j === 1){
                value = 1
                str += value + ' ';
            }else if(above && leftSide){
                value = above + leftSide
                str += value + ' ';
            } else{
                value = j
                str += value + ' ';
            }

            if(j === c && isTheCurrentRow){
                answer = value
            }
        }
        global = str
        console.log(str);
    }
    return answer
}

console.log(pascalTriangle(5,5,3))