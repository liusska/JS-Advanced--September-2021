function solve(param1, param2){
    n = Number(param1);
    m = Number(param2);
    let result = 0;

    for (let i=n; i <= m; i++){
        result += i;
    }
    return result;
}


console.log(solve('1', '5' ))
console.log(solve('-8', '20'))