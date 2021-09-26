function solve(commands){
    let arr = commands.shift().split(' ').map(x => Number(x));

    for (let command of commands){
        const tokens = command.split(' ')
        switch (tokens[0]){
            case 'Add':
                arr.push(Number(tokens[1]));
                break;
            case 'Remove':
                // let idx = arr.indexOf(Number(tokens[1]));
                // arr.splice(idx, 1);
                arr = arr.filter(el => el !== Number(tokens[1]));
                break;
            case 'RemoveAt':
                arr.splice(Number(tokens[1]), 1);
                break;
            case 'Insert':
                arr.splice(Number(tokens[2]), 0, Number(tokens[1]));
                break;
        }
    }
    return arr.join(' ')

}

// console.log(solve(
//     ['4 19 2 53 6 43',
//     'Add 3',
//     'Remove 2',
//     'RemoveAt 1',
//     'Insert 8 3']
// ))
//
// console.log(solve(['6 12 2 65 6 42',
//     'Add 8',
//     'Remove 12',
//     'RemoveAt 3',
//     'Insert 6 2']))

console.log(solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']))