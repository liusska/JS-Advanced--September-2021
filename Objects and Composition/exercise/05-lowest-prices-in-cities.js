function solve(data){
    const products = {};

    data.forEach((el)=> {
        let[townName, productName, productPrice] = el.split(' | ');
        productPrice = Number(productPrice);

        if (!products[productName]){
            products[productName] = {};
        }
        products[productName][townName] = productPrice;
    });

    for (const product in products){
        const sorted = Object.entries(products[product])
            .sort((a, b) => a[1] -b[1])
        console.log(`${product} -> ${sorted[0][1]} (${sorted[0][0]})`)
    }
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)

