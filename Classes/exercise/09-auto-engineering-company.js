function solve(data) {
    let carsMap = new Map();

    for (const line of data) {
        let [brand, model, produced] = line.split(" | ");
        if (!carsMap.has(brand)) {
            carsMap.set(brand, new Map());
        }
        let modelsMap = carsMap.get(brand);
        if (!modelsMap.has(model)) {
            modelsMap.set(model, 0);
        }
        modelsMap.set(model, modelsMap.get(model) + Number(produced));
    }

    for (const brand of carsMap.keys()) {
        console.log(brand);
        let mapModels = carsMap.get(brand);
        for (const model of mapModels.keys()) {
            console.log(`###${model} -> ${mapModels.get(model)}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)