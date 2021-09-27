function solve(arr){
    let mapObj = new Map();

    for(let row of arr){
        [product, quantity] = row.split(' ');
        if (!mapObj.has(product)){
            mapObj.set(product, Number(quantity));
        }else {
            let curr = mapObj.get(product);
            mapObj.set(product, curr + Number(quantity));
        }
    }

    for (let kvp of mapObj){
        console.log(`${kvp[0]} -> ${kvp[1]}`)
    }
}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)