function solve(a, b, c){
    let arr = [a, b, c];

    let positive = 0;
    let negative = 0;
    for (let el of arr ){
       if (el >= 0){
           positive ++;
       }else{
           negative ++;
       }
    }

    if (negative > positive && positive !== 0){
        return 'Positive';
    } else if(positive > negative && negative === 0){
        return 'Positive';
    }else{
        return 'Negative';
    }
}

console.log(solve(5, 12, -15));
console.log(solve(-6, -12, 14));
console.log(solve(-1, -2, -3));
console.log(solve(-5, 1, 1));