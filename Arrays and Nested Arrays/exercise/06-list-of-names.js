function solve(array){

    const sortedArr =  array.sort((a, b) => a.localeCompare(b))
    for (let i = 0; i < sortedArr.length; i++){
        console.log(`${i+1}.${sortedArr[i]}`);
    }
}


solve(["John", "Bob", "Christina", "Ema"])


// function solve(array){
//     let result = array
//         .sort((a, b) => a.localeCompare(b))
//         .map((name, i) => {
//             let result = `${i+1}.${name}`
//             return result
//         })
//
//     return result.join('\n')
// }
// console.log(solve(["John", "Bob", "Christina", "Ema"]))