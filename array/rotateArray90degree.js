function rotateArray90degree(matrix) {
    if (!matrix.length || !matrix[0].length) return [];

    let rows = matrix.length;
    let columns = matrix[0].length;
    let result = Array.from({ length: columns }, () => Array(rows));
    for(let i = 0; i<matrix.length; i++) {
        for(let j = 0; j<matrix[i].length; j++) {
            result[j][rows - i - 1] = matrix[i][j];
        }
    }
    return result;
}

console.log(rotateArray90degree([[1,2,3],[4,5,6],[7,8,9]]))