function solve(array, rotateCount){
    for (let i = 0; i < rotateCount; i++){
        let currentElement = array.pop()
        array.unshift(currentElement)
    }

    return array.join(' ')
}

console.log(solve(['1',
        '2',
        '3',
        '4'],
    2
))

console.log(solve(['Banana',
        'Orange',
        'Coconut',
        'Apple'],
    15
))
