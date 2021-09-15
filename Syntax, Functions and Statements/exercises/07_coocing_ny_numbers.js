function solve(number, com1, com2, com3, com4, com5) {
    number = Number(number);
    let chop = function () {
        return number /= 2;
    }
    let dice = function () {
        return number = Math.sqrt(number);
    }
    let spice = function () {
        return number += 1;
    }
    let bake = function () {
        return number *= 3;
    }
    let fillet = function () {
        return number *= 0.80;
    }

    const arr = [com1, com2, com3, com4, com5];
    for (let i=0; i<arr.length; i++){
        switch (arr[i]){
            case 'chop':
                console.log(chop());
                break;
            case 'dice':
                console.log(dice());
                break;
            case 'spice':
                console.log(spice());
                break;
            case 'bake':
                console.log(bake());
                break;
            case 'fillet':
                console.log(fillet());
                break;
        }

    }

}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');