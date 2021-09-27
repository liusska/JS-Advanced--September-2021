function solve(arr){
    const addressBook = {}

    for(let row of arr){
        [name, address] = row.split(':');
        addressBook[name] = address;
    }

    return Object.entries(addressBook)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach((a, b) => console.log(`${a[0]} -> ${a[1]}`))

}

solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)