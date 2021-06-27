function solve(array){
    let sortingNums = [];
    array.sort((a, b) => a-b);
    while (array.length){
        let current_small = array.shift()
        sortingNums.push(current_small);
        if (array.length > 0){
            let current_big = array.pop()
            sortingNums.push(current_big);
        }
    }
    return sortingNums
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))