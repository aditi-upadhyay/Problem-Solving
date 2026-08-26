// function majorityElement(input){
//     let hashMap = {}
//     for(let i=0;i<input.length;i++){
//         if(hashMap.hasOwnProperty(input[i])){
//             hashMap[input[i]] += 1
//             if(hashMap[input[i]] === Math.round(input.length/2)) {
//                 return input[i]
//             }
//         }else{
//             hashMap[input[i]] = 1
//         }
//     }
// }

function majorityElement(input){
    let count = 0;
    let element = null
    for(let i=0;i<input.length;i++){
        if(input[i] !== element){
            count --
        }else {
            count ++
        }
        element = input[i]
    }
    return element
}

console.log(majorityElement([7, 0, 0, 1, 7, 7, 2, 7, 7]))