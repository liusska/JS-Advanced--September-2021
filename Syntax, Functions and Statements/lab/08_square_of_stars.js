function solve(count=5){
    for (let i=0; i<count; i++){
        let stars = ''
        for (let j=0; j<count; j++){
            stars += '* '
        }
        console.log(stars)
    }
}

solve(2)
