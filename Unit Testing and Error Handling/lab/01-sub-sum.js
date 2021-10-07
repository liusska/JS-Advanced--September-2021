function subSum(numbers, startIndex, endIndex){
    if (!Array.isArray(numbers))
        return NaN;
    let letters = numbers.filter(x => typeof x !== "number");
    if (letters.length > 0){
        return NaN;
    }

    if (startIndex < 0)
        startIndex = 0;
    if (endIndex > numbers.length - 1)
        endIndex = numbers.length - 1;

    return numbers
        .slice(startIndex, endIndex + 1)
        .reduce((acc, curr) => acc + curr, 0);
}

function  test1_subSum(){
    // Arrange
    let numbers = [10, 20, 30, 40, 50, 60]
    let startIndex = 3;
    let endIndex = 300;
    let expectedResult = 150;

    // Act
    let actualResult = subSum(numbers, startIndex, endIndex);

    // Assert
    if (actualResult === expectedResult){
        console.log("Test 1 is passing");
    }else {
        console.error("Test 1 failed");
    }
}

function  test2_subSum(){
    // Arrange
    let numbers = [1.1, 2.2, 3.3, 4.4, 5.5];
    let startIndex = -3;
    let endIndex = 1;
    let expectedResult = 3.3;

    // Act
    let actualResult = subSum(numbers, startIndex, endIndex);

    // Assert
    if (actualResult === expectedResult){
        console.log("Test 1 is passing");
    }else {
        console.error("Test 1 failed");
    }
}

function  test3_subSum(){
    // Arrange
    let numbers = 5;
    let startIndex = 0;
    let endIndex = 1;
    let expectedResult = 'NaN';

    // Act
    let actualResult = subSum(numbers, startIndex, endIndex);

    // Assert
    if (actualResult === expectedResult){
        console.log("Test 1 is passing");
    }else {
        console.error("Test 1 failed");
    }
}


test1_subSum()
test2_subSum()
test3_subSum()