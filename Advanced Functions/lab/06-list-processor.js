function solve(data){
    let result = [];

    for (let action of data){
        let tokens = action.split(' ');
        processActions(tokens[0], tokens[1]);
    }

    function processActions(command, string){
        if (command === 'add'){
            result.push(string);
        }else if (command === 'remove'){
            result = result.filter((el) => el !== string);
        }else{
            console.log(result.join(','))
        }
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])
solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])