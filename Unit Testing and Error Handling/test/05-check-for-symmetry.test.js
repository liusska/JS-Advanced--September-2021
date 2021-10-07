// Take an array as an argument
// Return false for any input that isn’t of the correct type
// Return true if the input array is symmetric
// Otherwise, return false

const isSymmetric = require('../lab/05-check-for-symmetry');
const {assert, expect, should} = require('chai')

describe('Test isSymmetric functionality', () => {
   it('Should pass when symmetric array is provided', () => {
      let input  = [1, 2, 3, 2, 1];
      let expectedResult = true;

      let actualResult = isSymmetric(input);
       assert.equal(actualResult, expectedResult);
   });

    it('Should fail when non symmetric array is provided', () => {
        let input  = [1, 2, 3, 3, 1];
        let expectedResult = false;

        let actualResult = isSymmetric(input);
        assert.equal(actualResult, expectedResult);
    });

    it('Should fail when non array is provided as an argument', () => {
        let expectedResult = false;

        assert.equal(isSymmetric(null), expectedResult);
        assert.equal(isSymmetric({}), expectedResult);
        assert.equal(isSymmetric(''), expectedResult);
        assert.equal(isSymmetric(0), expectedResult);
        assert.equal(isSymmetric(true), expectedResult);
        assert.equal(isSymmetric(undefined), expectedResult);
    });

    it ('Should pass when an empty array is provided', () => {
        let actualResult = isSymmetric([])
        expect(actualResult).to.be.true;
    });

    it('Should pass when string array is provided', () => {
        let input  = ['pesho','gosho', 'pesho'];
        let expectedResult = true;

        let actualResult = isSymmetric(input);
        assert.equal(actualResult, expectedResult);
    });

    it('Should fail when string and number elements of array is provided', () => {
        let input  = ['1', 1];
        let expectedResult = false;

        let actualResult = isSymmetric(input);
        assert.equal(actualResult, expectedResult);
    });
});