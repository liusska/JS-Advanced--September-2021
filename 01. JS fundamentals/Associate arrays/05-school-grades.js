function solve(arr){
    let mapObj = new Map();

    for(let row of arr){
        let tokens = row.split(' ');
        let name = tokens[0];
        let grade = tokens.splice(1, tokens.length).map(Number)

        if (!mapObj.has(name)){
            mapObj.set(name, grade);
        }else{
            let currGrade = mapObj.get(name);
            currGrade.push(...grade);
            mapObj.set(name, currGrade);
        }
    }
    return Array.from(mapObj)
        .sort(compareAverage)
        .forEach((el) => console.log(`${el[0]}: ${el[1].join(', ')}`));


    function compareAverage(a, b) {
        // Calculate first average
        let avgA = a[1].reduce((acc, curr) => acc + curr, 0);
        avgA /= a[1].length;

        // Calculate second average
        let avgB = b[1].reduce((acc, curr) => acc + curr, 0);
        avgB /= b[1].length;

        // Comparison
        return avgA - avgB;
    }
}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)

solve(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'
])