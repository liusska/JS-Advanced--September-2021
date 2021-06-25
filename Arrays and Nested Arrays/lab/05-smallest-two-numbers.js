function solve(numbers){
    numbers.sort((a, b) => a- b);

    return `${numbers[0]} ${numbers[1]}`
}

console.log(solve([30, 15, 50, 5]))
console.log(solve([3, 0, 10, 4, 7, 3]))