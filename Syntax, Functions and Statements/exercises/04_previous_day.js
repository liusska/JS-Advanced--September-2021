function solve(year, month, day) {
    const date = new Date(year, month, day);
    // const milliSec = 1000 * 60 * 60 * 24

    date.setDate(date.getDate() - 1)
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

    // let dateString = year + '-' + month + '-' + day;
    // let event = new Date(dateString);
    // event.setDate(day-1);
    // console.log(event.getFullYear()+`-` + (Number(event.getMonth()) + 1)+ '-' + event.getDate());
}

console.log(solve(2016, 9, 30))
console.log(solve(2016, 10, 1))