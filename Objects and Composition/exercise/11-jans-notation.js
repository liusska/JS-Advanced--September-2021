function solve(inputArr){
    let operands = [];
    let wasWrong = false;
    for (let i = 0; i < inputArr.length; i++){
        if (typeof inputArr[i] === 'number'){
            operands.push(inputArr[i]);
        }else{
            let operator = inputArr[i];
            if(operands.length < 2){
                console.log('Error: not enough operands!');
                wasWrong = true;
                break;
            }
            let op2 = operands.pop();
            let op1 = operands.pop();
            let result = applyOperation(op1, op2, operator);
            operands.push(result);
        }
    }
    if(operands.length > 1 && wasWrong === false){
        console.log('Error: too many operands!')
    }else if (wasWrong === false){
        console.log(operands[0]);
    }


    function applyOperation(op1, op2, operator){
        const arithmeticOp = {
            '+': () => op1 + op2,
            '-': () => op1 - op2,
            '*': () => op1 * op2,
            '/': () => op1 / op2,
        }
        return arithmeticOp[operator]();
    }
}


solve([3, 4, '+']);
solve([5, 3, 4, '*', '-']);
solve([7, 33, 8, '-']);
solve([15, '/']);