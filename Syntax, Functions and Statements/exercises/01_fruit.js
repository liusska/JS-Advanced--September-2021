function solve(fruit, weight, price_kg){
    let weight_in_kg = weight / 1000
    let money = weight_in_kg * price_kg
    console.log(`I need $${money.toFixed(2)} to buy ${weight_in_kg.toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80)
solve('apple', 1563, 2.35)