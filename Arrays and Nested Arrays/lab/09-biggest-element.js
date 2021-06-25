function solve(array){
    const new_arr = [];
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array[i].length; j++){
            new_arr.push(array[i][j]);
        }
    }
    return new_arr.reduce((acc, x) => acc > x ? acc : x);
}

console.log(solve([[20, 50, 10], [8, 33, 145]]));
console.log(solve([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));