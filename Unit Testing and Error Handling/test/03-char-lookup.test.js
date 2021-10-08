const lookupChar = require('../exercise/03-char-lookup');
const assert = require('chai').assert;

describe('test lookupChar for correct index returned', () => {
    describe('return undefined cases', () => {
        it ('return undefined if type of input string is incorrect', () => {
            assert.equal(undefined, lookupChar(1, 1));
            assert.equal(undefined, lookupChar({}, 1));
            assert.equal(undefined, lookupChar(1, NaN));
            assert.equal(undefined, lookupChar(undefined, 3));
        });
        it ('return undefined if type of index is incorrect', () => {
            assert.equal(undefined, lookupChar(1, '1'));
            assert.equal(undefined, lookupChar('1', NaN));
        });
        it('return undefined if some of input values is empty', () => {
            assert.equal(undefined, lookupChar());
            assert.equal(undefined, lookupChar(1 ));
            assert.equal(undefined, lookupChar('string'));
        })
    });
    describe ('return Incorrect index message if index is out of range', () => {
        it ('return incorrect index if index is less than zero', () => {
            assert.equal('Incorrect index', lookupChar('input', -3));
            assert.equal('Incorrect index', lookupChar('input', -10));
        });
        it ('return incorrect index if index is bigger than input length', () => {
            assert.equal('Incorrect index', lookupChar('input', 10));
            assert.equal('Incorrect index', lookupChar('input', 5));
        });
    });

    describe ('return the chat at given index', () => {
        it('return incorrect index if index is less than zero', () => {
            assert.equal('r', lookupChar('correct case', 3));
            assert.equal('I', lookupChar('Input', 0));
            assert.equal('d', lookupChar('dataToRead', 9));
        });
    });
});
