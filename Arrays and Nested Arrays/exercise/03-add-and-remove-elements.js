function solve(actions) {
    let data = [];
    let number = 1

    for (let i = 0; i < actions.length; i++){
        if (actions[i] === 'add'){
            data.push(number);
        }else if (actions[i] === 'remove'){
            data.pop();
        }
        number++
    }

    return data.length !== 0 ? data.join("\n") : "Empty";
}

console.log(solve(['add',
    'add',
    'add',
    'add']
))

console.log(solve(['add',
    'add',
    'remove',
    'add',
    'add']
))

console.log(solve(['remove',
    'remove',
    'remove']
))