function repeat(data, count){
    let result = '';

    for (let i = 0; i < count; i++){
        result += data;
    }
    return result
}

console.log(repeat('abc', 3));
console.log(repeat('String', 2));
