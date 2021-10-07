const createCalculator = require('../lab/07-add-subtract')
const expect = require('chai').expect;

describe("createCalculator()", function () {

    describe('Happy cases', () => {
        it("should return 0", () => {
            const calc = createCalculator();
            let value = calc.get();
            expect(value).to.be.equal(0);
        });

        it("should return 2 after add(10); subtract('7'); add('-2'); subtract(-1)", () => {
            const calc = createCalculator();
            calc.add(10);
            calc.subtract('7');
            calc.add('-2');
            calc.subtract(-1);
            let value = calc.get();
            expect(value).to.be.equal(2);
        });
    });

    describe('Invalid input type, return NaN', () => {
        it("should return NaN for add(string)", () => {
            const calc = createCalculator();
            calc.add('hello');
            let value = calc.get();
            expect(value).to.be.NaN;
        });
        it("should return NaN for subtract(string)", () => {
            const calc = createCalculator();
            calc.subtract('hello');
            let value = calc.get();
            expect(value).to.be.NaN;
        });
    });
});
