function solve(commands){
    let count = 0;
    const data = []
    for (let command of commands){
        count += 1;
        if (command === 'add'){
            data.push(count);
        }else {
            data.pop();
        }
    }
    return data.length !== 0? data.join('\n') : 'Empty';
}

console.log(solve(
    ['add',
        'add',
        'add',
        'add']

))

console.log(solve(
    ['add',
        'add',
        'remove',
        'add',
        'add']

))

console.log(solve(
    ['remove',
        'remove',
        'remove']

))