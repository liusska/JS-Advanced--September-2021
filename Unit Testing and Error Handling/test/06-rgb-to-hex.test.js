const { expect } = require('chai');
const rgbToHexColor = require('../lab/06-rgb-to-hex');

describe('RBG converter', () => {
    describe('Happy path', () => {
        it('converts white', () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        });

        it('converts black', () => {
            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        });

        it('converts SoftUni dark blue', () => {
            expect(rgbToHexColor(35, 68, 101)).to.equal('#234465');
        });
    });

    describe('Invalid parameters', () => {
       it('Returns undefined for invalid parameters', () => {
           expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
           expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
           expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
           expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
       });
        it('Returns undefined for missing parameters', () => {
            expect(rgbToHexColor(255)).to.be.undefined;
        });
        it('Returns undefined for values out of range', () => {
            expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
            expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
            expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
            expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        });
        it('Returns undefined for invalid parameter type', () => {
            expect(rgbToHexColor('0', '0', '0')).to.be.undefined;
        });
    });

});