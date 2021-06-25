function solve(matrix){
    let equalsCount = 0;
    for (let i = 0; i < matrix.length-1; i++){
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === matrix[i+1][j]){
                equalsCount++;
            }
            if (matrix[i][j] === matrix[i][j+1]){
                equalsCount++;
            }
            if (i === matrix.length - 2 && matrix[i + 1][j] === matrix[i + 1][j + 1]) {
                equalsCount++;
            }
        }
    }
    return equalsCount;
}

console.log(solve([[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
]))

console.log(solve([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
))

console.log(solve([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
))
