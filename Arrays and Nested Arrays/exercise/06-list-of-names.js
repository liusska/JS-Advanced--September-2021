function solve(array){
    let result = array
        .slice(0)
        .sort((a, b) => a.localeCompare(b))
        .map((name, i) => {
            let result = `${i+1}.${name}`
            return result
        })

    return result.join('\n')

}
console.log(solve(["John", "Bob", "Christina", "Ema"]))