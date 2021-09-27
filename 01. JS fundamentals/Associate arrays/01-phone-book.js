function solve(arr){
    const phonebook = {};
    for (let row of arr){
        [name, number] = row.split(' ');
        phonebook[name] = number;
    }

    for (const key of Object.keys(phonebook)){
        console.log(`${key} -> ${phonebook[key]}`);
    }
}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)