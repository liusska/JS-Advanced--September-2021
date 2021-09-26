function grades(grade){
    if (grade < 3.00){
        return `Fail (${Math.floor(grade)})`;
    }else if (grade < 3.50){
        return `Poor (${grade.toFixed(2)})`;
    }else if (grade < 4.50){
        return `Good (${grade.toFixed(2)})`;
    }else if (grade < 5.50){
        return `Very good (${grade.toFixed(2)})`
    }else {
        return `Excellent (${grade.toFixed(2)})`
    }
}

console.log(grades(2.99));
console.log(grades(4.50));
