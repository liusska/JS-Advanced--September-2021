function solve(juices){
    const juiceObj = {};
    const bottlesSet = new Set();

    for (let juice of juices){
        let [fruit, quantity] = juice.split(" => ");
        if (juiceObj[fruit] === undefined){
            juiceObj[fruit] = 0;
        }
        juiceObj[fruit] += Number(quantity);
        if (Math.floor(Number(juiceObj[fruit])) / 1000 >= 1){
            bottlesSet.add(fruit);
        }
    }

    let result = "";
    for (const bottle of bottlesSet){
        let bottles = Math.floor(Number(juiceObj[bottle])/ 1000) ;
        result += `${bottle} => ${bottles.toFixed(0)}\n`;
    }
    return result;

}

console.log(solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
))

console.log(solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
))