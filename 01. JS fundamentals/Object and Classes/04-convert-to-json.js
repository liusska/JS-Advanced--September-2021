function solve(name, lastName, hairColor){
    const dict = {
        'name': name,
        'lastName': lastName,
        'hairColor': hairColor
    }
    console.log(JSON.stringify(dict))
}

solve('George', 'Jones', 'Brown')