// function traverse(input) {
//     let order = ['top', 'right', 'bottom', 'left']
//     let currentOrder = order[1];
//     let series = []
//     let completed = false
//     const right = () => {
//         let exit = false
//         for(let i = 0; i<input.length;i++){
//             for (let j = 0; j < input[i].length; j++) {
//                 if(!series.includes(input[i][j])){
//                     console.log(input[i][j])
//                     series.push(input[i][j])
//                 }
//                 if(j === input[i].length - 1){
//                     exit = true
//                     break
//                 }
//             }
//             if(exit){
//                 break
//             }
//         }
//     }
 
//     const bottom = () => {
//         for (let i = 0; i < input.length; i++) {
//             if (!series.includes(input[i][input[i].length - 1])) {
//                 series.push(input[i][input[i].length - 1])
//                 console.log(input[i][input[i].length - 1])
//             }
//         }
//     }

//     const left = () => {
//         let lastElement = series[series.length - 1]
//         for (let i = 0; i < input.length; i++) {
//             if (input[i].includes(lastElement)) {
//                 for(let j = input[i].length - 1; j >= 0; j--){
//                     if(!series.includes(input[i][j])){
//                         console.log(input[i][j])
//                         series.push(input[i][j])
//                     }
//                 }
//             }
//         }
//     }

//     const top = () => {
//         for (let i = input.length - 1; i >= 0; i--) {
//             if(!series.includes(input[i][0])){
//                 console.log(input[i][0])
//                 series.push(input[i][0])
//             }
//         }
//     }

    

//     while(!completed){
//         // console.log("----------------LOOP-STARTED------------",currentOrder)

//         if (currentOrder === 'right') {
//             right(input)
//         }
//         if (currentOrder === 'bottom') {
//             bottom(input)
//         }
//         if(currentOrder === 'left'){
//             left(input)
//         }
//         if(currentOrder === 'top'){
//             top(input)
//         }
//         if (currentOrder === 'right') {
//             right(input)
//         }
//         if (currentOrder === 'bottom') {
//             bottom(input)
            
//         }
//         if(currentOrder === 'left'){
//             left(input)
//             completed = true
//         }
        
//         currentOrder = order[order.indexOf(currentOrder) + 1]
//     }
// }

function traverse(matrix) {
    if (!matrix.length) return [];
  
    const result = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    
    while (top <= bottom && left <= right) {
      // 1. left → right on top row
      for (let j = left; j <= right; j++) {
        result.push(matrix[top][j]);
      }
      top++;
      // 2. top → bottom on right column
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
  
      // 3. right → left on bottom row (only if a row still exists)
      if (top <= bottom) {
        for (let j = right; j >= left; j--) {
          result.push(matrix[bottom][j]);
        }
        bottom--;
      }
  
      // 4. bottom → top on left column (only if a column still exists)
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          result.push(matrix[i][left]);
        }
        left++;
      }
    }
  
    return result;
  }
 
console.log(traverse([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));
/**
 * [1, 2, 3, 4], 
 * [5, 6, 7, 8], 
 * [9, 10, 11, 12], 
 * [13, 14, 15, 16] 
 * **/