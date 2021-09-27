function solve(arr){
    const meetings = {}
    for (let row of arr){
        [day, name] = row.split(' ');
        if (meetings[day] === undefined){
            meetings[day] = name;
            console.log(`Scheduled for ${day}`)
        }else{
            console.log(`Conflict on ${day}!`)
        }
    }

    for(const key of Object.keys(meetings)){
        console.log(`${key} -> ${meetings[key]}`)
    }
}

solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])