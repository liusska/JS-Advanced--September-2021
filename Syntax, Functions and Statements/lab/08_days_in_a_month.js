function solve(moth, year){
    return new Date(year, moth, 0).getDate();

}
console.log(solve(1, 2012))

