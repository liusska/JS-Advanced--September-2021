function solve(number, com1, com2, com3, com4, com5){
    let result = Number(number);
    const operations = [com1, com2, com3, com4, com5];
    for (let i = 0; i < operations.length; i++){
        switch (operations[i]){
            case 'chop': result /= 2;
                break;
            case 'dice': result = Math.sqrt(result);
                break;
            case 'spice': result += 1;
                break;
            case 'bake': result *= 3;
                break;
            case 'fillet': result = (result * 0.80).toFixed(1);
                break;
        }
        console.log(result);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')