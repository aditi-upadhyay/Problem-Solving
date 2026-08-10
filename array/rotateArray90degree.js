function rotateArray90degree(matrix) {
    let rows = matrix.length;
    let columns = matrix[0].length;
    let result = new Array(columns).fill(0).map(() => new Array(rows).fill(0));
    for(let i = 0; i<matrix.length; i++) {
        for(let j = 0; j<matrix[i].length; j++) {
            result[j][rows - i - 1] = matrix[i][j];
        }
    }
    return result;
}

console.log(rotateArray90degree([[1,2,3],[4,5,6],[7,8,9]]))