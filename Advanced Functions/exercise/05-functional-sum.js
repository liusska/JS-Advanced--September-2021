function add(num){
    let add = num;

    function sum(num2){
        add += num2;
        return sum;
    }

    sum.toString = () => {
        return add;
    }
    return sum;
}

console.log(add(1).toString())
console.log(add(1)(6)(-3).toString())
