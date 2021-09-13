function solve(townsArray){
    const towns = {};

    for (let townAsString of townsArray){
        let [name, population] = townAsString.split(' <-> ');
        population = Number(population);

        if (towns[name] === undefined)
            towns[name] = 0;
        towns[name] += population
    }

    for (let name in towns) {
        console.log(`${name} : ${towns[name]}`)
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)