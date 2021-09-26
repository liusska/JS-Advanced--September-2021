function solve(arr){
    const sortedArr = []

    for (let el of arr){
        el >= 0 ? sortedArr.push(el) : sortedArr.unshift(el);
    }
    return sortedArr.join('\n');
}

console.log(solve([7, -2, 8, 9]))
console.log('------------')
console.log(solve([3, -2, 0, -1]))