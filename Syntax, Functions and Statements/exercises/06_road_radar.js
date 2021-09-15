function solve(speed, area){
    let limit;
    switch (area){
        case 'motorway': limit = 130; break;
        case 'interstate': limit = 90; break;
        case 'city': limit = 50; break;
        case 'residential': limit = 20; break;
    }
    if (speed <= limit) {
        return `Driving ${speed} km/h in a ${limit} zone`;
    }
    const speedOverLimit = speed - limit;
    let status;
    if (speedOverLimit > 40) {
        status = 'reckless driving';
    } else if (speedOverLimit > 20){
        status = 'excessive speeding';
    } else {
        status = 'speeding';
    }

    return `The speed is ${speedOverLimit} km/h faster than the allowed speed of ${limit} - ${status}`
}

console.log(solve(40, 'city'))
console.log(solve(21, 'residential'))
console.log(solve(120, 'interstate'))
console.log(solve(200, 'motorway'))