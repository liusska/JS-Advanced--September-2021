function solve(data, delimiter){
        return data.join(delimiter);
}


console.log(solve(['One',
        'Two',
        'Three',
        'Four',
        'Five'],
    '-'
))

console.log(solve(['How about no?',
        'I',
        'will',
        'not',
        'do',
        'it!'],
    '_'
))