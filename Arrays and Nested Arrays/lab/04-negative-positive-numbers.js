function solve(arr){
    const new_arr = [];

    for (let el of arr){
        if (el < 0){
            new_arr.unshift(el);
        }else{
            new_arr.push(el);
        }
    }
    return new_arr.join('\n')
}

console.log(solve([7, -2, 8, 9]));
console.log(solve([3, -2, 0, -1]));