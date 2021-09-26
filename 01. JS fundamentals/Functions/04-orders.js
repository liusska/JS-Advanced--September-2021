function solve(product, quantity){
    if (product === 'coffee'){
        return (quantity * 1.50).toFixed(2);
    }else if (product === 'water'){
        return (quantity * 1).toFixed(2);
    }else if (product === 'coke'){
        return (quantity * 1.40).toFixed(2);
    }else if (product === 'snacks'){
        return (quantity * 2).toFixed(2);
    }
}

console.log(solve("water", 5))
console.log(solve("coffee", 2))