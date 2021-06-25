function solve(n, k){
    const data = [1]
    for (let i = 1; i < n; i++){
        let val = 0
        data.slice(-k).map(x => val += x)
        data.push(val)
    }
    return data
}

console.log(solve(6, 3))
console.log(solve(8, 2))