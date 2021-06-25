function solve(arr){
    let even_positions_arr = []
    for (let i=0; i < arr.length; i+= 2){
        even_positions_arr.push(arr[i]);
    }
    return even_positions_arr.join(' ');
}

console.log(solve(['20', '30', '40', '50', '60']));
console.log(solve(['5', '10']));