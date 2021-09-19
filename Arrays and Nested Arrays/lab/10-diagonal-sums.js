function diagonals(matrix){
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    for (let i = 0; i < matrix.length; i++){
        primaryDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[i][matrix.length-1 -i];
    }
    return `${primaryDiagonal} ${secondaryDiagonal}`;
}

console.log(diagonals(
    [[20, 40],
        [10, 60]]

));

console.log(diagonals(
    [[3, 5, 17],
        [-1, 7, 14],
        [1, -8, 89]]

));