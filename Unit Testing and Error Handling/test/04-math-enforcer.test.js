const {mathEnforcer} = require('../exercise/04-math-enforcer');
const expect = require('chai').expect;

describe ('test mathEnforcer functionality', () => {

    describe('test addFive with given single num', () => {
        it('test mathEnforcer return undefined if non valid type', () => {
            expect(mathEnforcer.addFive('f')).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
            expect(mathEnforcer.addFive('')).to.be.undefined;
            expect(mathEnforcer.addFive()).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
            expect(mathEnforcer.addFive([1])).to.be.undefined;
            expect(mathEnforcer.addFive(undefined)).to.be.undefined;
        });
        it('test mathEnforcer return successful result', () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
            expect(mathEnforcer.addFive(100)).to.be.equal(105);
            expect(mathEnforcer.addFive(-2)).to.be.equal(3);
            expect(mathEnforcer.addFive(0)).to.be.equal(5);
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
            expect(mathEnforcer.addFive(5.5)).to.be.equal(10.5);

        })
    });

    describe('test subtractTen with given single num', () => {
        it('test subtractTen return undefined if non valid type', () => {
            expect(mathEnforcer.subtractTen('f')).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
            expect(mathEnforcer.subtractTen('')).to.be.undefined;
            expect(mathEnforcer.subtractTen()).to.be.undefined;
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
            expect(mathEnforcer.subtractTen([1])).to.be.undefined;
        });
        it('test subtractTen return successful result', () => {
            expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
            expect(mathEnforcer.subtractTen(100)).to.be.equal(90);
            expect(mathEnforcer.subtractTen(0)).to.be.equal(-10);
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
            expect(mathEnforcer.subtractTen(10.5)).to.be.equal(0.5);
        });
    });

    describe('test sum with given two params', () => {
        it('test sum return undefined if non valid type', () => {
            expect(mathEnforcer.sum(1)).to.be.undefined;
            expect(mathEnforcer.sum('f')).to.be.undefined;
            expect(mathEnforcer.sum('f', 's')).to.be.undefined;
            expect(mathEnforcer.sum({}, 2)).to.be.undefined;
            expect(mathEnforcer.sum(1, '')).to.be.undefined;
            expect(mathEnforcer.sum()).to.be.undefined;
            expect(mathEnforcer.sum(undefined)).to.be.undefined;
            expect(mathEnforcer.sum(undefined, NaN)).to.be.undefined;
            expect(mathEnforcer.sum(1, undefined)).to.be.undefined;
            expect(mathEnforcer.sum(undefined, 5)).to.be.undefined;
            expect(mathEnforcer.sum([], [])).to.be.undefined;
            expect(mathEnforcer.sum([1, 2])).to.be.undefined;
            expect(mathEnforcer.sum(1, "5")).to.be.undefined;
        });
        it('test sum return successful result', () => {
            expect(mathEnforcer.sum(5, 20)).to.be.equal(25);
            expect(mathEnforcer.sum(10, 0)).to.be.equal(10);
            expect(mathEnforcer.sum(-100, 50)).to.be.equal(-50);
            expect(mathEnforcer.sum(-5, -5)).to.be.equal(-10);
            expect(mathEnforcer.sum(0, 0)).to.be.equal(0);
            expect(mathEnforcer.sum(5.5, 5)).to.be.closeTo(10.5, 0.01);
            expect(mathEnforcer.sum(1.5, 1.5)).to.be.equal(3.0);
            expect(mathEnforcer.sum(-10.5, -10.5)).to.be.equal(-21.0);
        });
    });
});