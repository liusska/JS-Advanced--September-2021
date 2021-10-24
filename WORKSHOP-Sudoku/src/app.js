import { p1 } from './puzzles.js';
import  { generateBoard, button } from './board.js';

// Load puzzle
// Generate DOM elements
// Configure input event listeners
// Check solution

window.addEventListener('DOMContentLoaded', start);


function start(){
    const main = document.querySelector('main');
    const cells = generateBoard(p1, main);
    // const cells = generateBoard(
    //     new Array(3).fill(
    //         new Array(3).fill(
    //             (new Array(9).fill(0))
    //     )), main);

    const checkBtn = document.getElementById('checkBtn');
    checkBtn.addEventListener('click', () => {
        cells.blocks.forEach(check);
        cells.rows.forEach(check);
        cells.columns.forEach(check);
        checkBtn.replaceWith(uncheckBtn);
    });

    const uncheckBtn = button('Clear Check', () => {
        cells.blocks.forEach(c => c.forEach(x => x.classList.remove('error')));
        uncheckBtn.replaceWith(checkBtn);
    });

}

function check(cells){
    const numbers = new Set();

    for (let cell of cells) {
        if (cell.value !== ''){
            numbers.add(cell.value);
        }
    }

    if(numbers.size !== 9){
        cells.forEach(c => c.classList.add('error'));
    }
}

