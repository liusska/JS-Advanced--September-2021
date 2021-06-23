function solve(radius){
    let typeData = typeof(radius);
    let area;
    if (typeData === 'number'){
        area = Math.PI * radius ** 2;
        console.log(area.toFixed(2));
    }else{
        area = `We can not calculate the circle area, because we receive a ${typeData}.`;
        console.log(area);
    }
}

solve(5)
solve('name')
