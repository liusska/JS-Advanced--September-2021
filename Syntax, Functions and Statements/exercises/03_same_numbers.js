function solve(number){
    let numberToString = number.toString();
    let equals_digits = true;
    let sum = 0;

    for (let i=0; i<numberToString.length; i++){
        let next = numberToString[i+1];
        if (numberToString[i] !== numberToString[i+1] && next !== undefined){
            equals_digits = false;
        } 
        sum += parseInt(numberToString[i])
    }

    return `${equals_digits}\n${sum}`
}

console.log(solve(2222222));
console.log(solve(1234));