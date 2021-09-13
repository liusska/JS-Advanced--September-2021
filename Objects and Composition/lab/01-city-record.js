function solve(name, population, treasury){
    const dict = {
        'name': name,
        'population': population,
        'treasury': treasury,
    }
    return dict
}

console.log(solve('Tortuga',
    7000,
    15000
))

console.log(solve('Santo Domingo',
    12000,
    23500
))