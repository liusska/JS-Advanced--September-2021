function solve(n, k){
    let result = [1];
    for (let i = 1; i < n; i++){
        let curr = result.slice(-k).reduce((acc, curr) => acc + curr, 0);
        result.push(curr);
    }
    return result.join(' ');
}

console.log(solve(6, 3))
console.log(solve(8, 2))