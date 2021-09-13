function solve(params){
    let sum = 0;
    let inverse = 0;
    let concat = '';
    for(let i=0; i<params.length; i++){
        sum += params[i];
        inverse += 1 / params[i];
        concat += params[i];
    }
    console.log(sum);
    console.log(inverse);
    console.log(concat);
}
solve([2, 4, 8, 16])