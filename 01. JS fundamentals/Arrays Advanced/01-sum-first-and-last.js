function solve(arr){
    arr = arr.map(x => Number(x));
    return arr[0] + arr[arr.length-1];
}

console.log(solve(['20', '30', '40']))
console.log(solve(['5', '10']))