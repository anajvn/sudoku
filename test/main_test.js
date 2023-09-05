const assert = require('assert');
const { describe, beforeEach } = require('node:test');
const main = require('../main.js');

describe('Checking Functions', () => {
    describe('createPositions', () => {
        it('returns different lines and columns', () => {
            const expected = 0;
            
            const array = main.createPositions(50);
            const result = array.filter((item, index) => array.indexOf(item) !== index);
            
            assert.equal(result.length, expected);
        });
        it('returns the right amount of positions', () => {
            const expected = 50;
            
            const result = main.createPositions(50);
            
            assert.equal(result.length, expected);
        });
    });
    describe('checkLine and checkColumn', () => {
        it('return true when there is one or more numbers equal the one provided in the line', () => {
            const expected = true;
            
            const result = main.checkLine(0, 1);

            assert.equal(result, expected);
        });
        it('return false when there is no number equal the one provided in the line', () => {
            const expected = false;

            const result = main.checkLine(5, 1);

            assert.equal(result, expected);
        });
        it('return true when there is one or more numbers equal the one provided in the column', () => {
            const expected = true;

            const result = main.checkColumn(0, 1);

            assert.equal(result, expected);
        });
        it('return false when there is no number equal the one provided in the column', () => {
            const expected = false;

            const result = main.checkColumn(5, 1);

            assert.equal(result, expected);
        });
    });
    describe('checkSquare', () => {
        it('return true when there is one or more numbers equal the one provided in the square', () => {
            const expected = true;
            
            const result = main.checkSquare(0, 1, 1);

            assert.equal(result, expected);
        });
        it('return false when there is no number equal the one provided in the square', () => {
            const expected = false;

            const result = main.checkSquare(5, 1, 1);

            assert.equal(result, expected);
        });
    });
    // describe('fillGrid', () => {
    //     it('distributes the right number in the grid', () => {
    //         const expected = 20;
    //         let amount;

    //         main.fillGrid(20);
    //         for(let i=0; i<9;i++){
    //             for(let j=0; j<9; j++){
    //                 if(main.grid[i][j] != 0){
    //                     amount++;
    //                 }
    //             }
    //         }
    //         const result = amount;

    //         assert.equal(result, expected);
    //     });
    //});
});


