function solve(array){
    return array.reduce(function (filteredNums, val){
        if (val >= filteredNums[filteredNums.length-1] || filteredNums.length === 0){
            filteredNums.push(val);
        }
        return filteredNums
    }, [])
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
))

console.log(solve([1,
    2,
    3,
    4]
))

console.log(solve([20,
    3,
    2,
    15,
    6,
    1]
))