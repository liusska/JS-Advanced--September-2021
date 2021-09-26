function solve(arr){
    const cats = []
    for (let el of arr){
        const cat = {};
        let tokens = el.split(' ');
        cat["name"] = tokens[0];
        cat["age"] = tokens[1];
        cats.push(cat);
    }
    for (let el of cats){
        console.log(`${el['name']}, age ${el['age']} says Meow`)
    }
}

solve(['Mellow 2', 'Tom 5'])