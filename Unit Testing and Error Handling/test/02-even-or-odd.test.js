const isOddOrEven = require('../exercise/02-even-or-odd');
const assert = require('chai').assert;

describe ('Test the length of string even or odd', () => {
    it('Returns undefined if the input type is not string', () => {
        let actualResult = undefined;
        assert.equal(actualResult, isOddOrEven(123));
        assert.equal(actualResult, isOddOrEven([]));
        assert.equal(actualResult, isOddOrEven({}));
        assert.equal(actualResult, isOddOrEven(NaN));
    });

    it('Returns even if even length of input string', () => {
        let actualResult = 'even';
        let expectedResult = isOddOrEven('even length of string!')
        assert.equal(actualResult, expectedResult);
    });

    it('Returns odd if odd length of input string', () => {
        let actualResult = 'odd';
        let expectedResult = isOddOrEven('odd length of string!')
        assert.equal(actualResult, expectedResult);
    });

    it('Returns even if input is empty string', () => {
        let actualResult = 'even';
        let expectedResult = isOddOrEven('')
        assert.equal(actualResult, expectedResult);
    });
});