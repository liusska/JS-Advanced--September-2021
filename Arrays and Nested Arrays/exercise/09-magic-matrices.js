function solve(matrix){
    let totalSum = [];

    for (let i = 0; i < matrix.length; i++) {
        let colSum = 0;
        let row = matrix[i];
        let sum = row.reduce((result, curr) => (result + curr), 0)
        totalSum.push(sum);
        for (let j = 0; j < matrix.length; j++ ){
            colSum += matrix[j][i];
        }
        totalSum.push(colSum);
    }

    return totalSum.every((el, i, matrix) => el === matrix[0])
}

console.log(solve([
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]
    ]
))

console.log(solve([
        [11, 32, 45],
        [21, 0, 1],
        [21, 1, 1]
    ]
))

console.log(solve([
        [1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]
    ]
))