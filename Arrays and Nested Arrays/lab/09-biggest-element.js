function biggestElement(array){
    // let maxNum = array[0][0];
    // for (let row of array){
    //     for (let col of row){
    //         if (maxNum < col){
    //             maxNum = col;
    //         }
    //     }
    // }
    // return maxNum;

    const newArr = [];
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array[i].length; j++){
            newArr.push(array[i][j]);
        }
    }
    return newArr.reduce((acc, x) => acc > x ? acc : x);
}


console.log(biggestElement([
        [20, 50, 10],
        [8, 33, 145]
    ])
)

console.log(biggestElement([
        [3, 5, 7, 12],
        [-1, 4, 33, 2],
        [8, 3, 0, 4]]
    )
)