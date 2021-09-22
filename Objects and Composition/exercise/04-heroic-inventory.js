function solve(data){
    const heroes = []
    data.forEach((el) => {
        let [name, level, items] = el.split(" / ");
        heroes.push({
            name,
            level: Number(level),
            items: items ? items.split(", ") : []
        })
    })

    return JSON.stringify(heroes);
}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
))

console.log(solve(['Jake / 1000 / Gauss, HolidayGrenade']))