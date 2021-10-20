const  numberOperations = require('../03.NumberOperations/03.numberOperations');
const assert = require('chai').assert;

describe("Tests  numberOperations functionality", function() {
    describe("powNumber(num) functionality", function() {
        it("positive result from func", function() {
            assert.equal(numberOperations.powNumber(5), 25);
            assert.equal(numberOperations.powNumber(0), 0);
            assert.equal(numberOperations.powNumber(-2), 4);
            assert.equal(numberOperations.powNumber(100), 10000);
            assert.equal(numberOperations.powNumber(-100), 10000);
        });
    });

    describe("numberChecker(input) functionality", function() {
        it("function throw isNaN error", function() {
            assert.throw(() => numberOperations.numberChecker('a'));
            assert.throw(() => numberOperations.numberChecker());
            assert.throw(() => numberOperations.numberChecker(['message']));
            assert.throw(() => numberOperations.numberChecker({}));
            assert.throw(() => numberOperations.numberChecker(undefined));
        });
        it("function return message if number < 100", function() {
            assert.equal(numberOperations.numberChecker(20), 'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker(0), 'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker(-1), 'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker(99), 'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker(-20), 'The number is lower than 100!');
        });

        it("function return message if number > 100", function() {
            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
            assert.equal(numberOperations.numberChecker(150), 'The number is greater or equal to 100!');
            assert.equal(numberOperations.numberChecker(2000), 'The number is greater or equal to 100!');
            assert.equal(numberOperations.numberChecker(560), 'The number is greater or equal to 100!');
            assert.equal(numberOperations.numberChecker(101), 'The number is greater or equal to 100!');
        });
    });
    describe("sumArrays(array1, array2) functionality", function() {
        it("function return successful result", function() {
            assert.equal(numberOperations.sumArrays([1, 2, 3], [4, 5, 6, 7, 8])[4], 8);
            assert.equal(numberOperations.sumArrays([1, 2, 3], [4, 5, 6,])[0], 5);
            assert.equal(numberOperations.sumArrays([1, 2, 3], [])[1], 2);
            assert.equal(numberOperations.sumArrays([1], [])[0], 1);
            assert.equal(numberOperations.sumArrays([], [])[0], undefined);
        });
    });
});
