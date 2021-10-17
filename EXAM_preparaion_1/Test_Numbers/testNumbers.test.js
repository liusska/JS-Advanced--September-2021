const testNumbers = require('../Test_Numbers/testNumbers');
const assert = require('chai').assert;

describe('test testNumber functionality', () => {
    describe('sumNumbers', () => {
        it('sumNumbers returns undefined if params are not numbers', () => {
            assert.equal(undefined, testNumbers.sumNumbers('a', 5));
            assert.equal(undefined, testNumbers.sumNumbers('a', '5'));
            assert.equal(undefined, testNumbers.sumNumbers(2, '5'));
            assert.equal(undefined, testNumbers.sumNumbers([], '5'));
            assert.equal(undefined, testNumbers.sumNumbers(undefined, '5'));

        });
        it('sumNumbers returns result if params are numbers', () => {
            assert.equal(10.00, testNumbers.sumNumbers(5, 5));
            assert.equal(-10, testNumbers.sumNumbers(-15, 5));
            assert.equal(14.25, testNumbers.sumNumbers(2, 12.25));
            assert.equal(27.66, testNumbers.sumNumbers(15.41, 12.25));
            assert.equal(0, testNumbers.sumNumbers(-10, 10))
        });
    });
    describe('test numberChecker', () => {
        it ('numberChecker throw Error', () => {
            assert.throw(() => testNumbers.numberChecker('a'));
        });
        it('numberChecker return even for the result', () => {
            assert.equal('The number is even!', testNumbers.numberChecker(20));
            assert.equal('The number is even!', testNumbers.numberChecker(0));
            assert.equal('The number is even!', testNumbers.numberChecker(-1000));
        });
        it('numberChecker return odd for the result', () => {
            assert.equal('The number is odd!', testNumbers.numberChecker(7));
            assert.equal('The number is odd!', testNumbers.numberChecker(-11));
            assert.equal('The number is odd!', testNumbers.numberChecker(0.86));
            assert.equal('The number is odd!', testNumbers.numberChecker(99));
            assert.equal('The number is odd!', testNumbers.numberChecker(-0.96));
        });
    });
    describe('averageSumArray', () => {
        it('averageSumArray returns result', () => {
            assert.equal(2.5, testNumbers.averageSumArray([1, 2, 3, 4]));
            assert.equal(0, testNumbers.averageSumArray([0]));
            assert.equal(2, testNumbers.averageSumArray([1, 2, 3]));
        });
    });
})