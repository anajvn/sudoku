import { grid } from './main.js';
import { fillGrid } from './main.js';

let startButton = document.getElementById('startbtn');

let easyButton = document.getElementById('easy');
let mediumButton = document.getElementById('medium');
let hardButton = document.getElementById('hard');

// functions

function createGrid(level){
    let numbers = 0;
    switch(level){
        case 'easy':
            numbers = 38;
            break;
        case 'medium':
            numbers = 30;
            break;
        case 'hard':
            numbers = 25;
            break;
    }

    fillGrid(numbers);

    for(let i=0; i<9; i++){
        for(let j=0; j<0; j++){
            let val = grid[i][j];
            if( value == 0){
                continue;
            }
            document.getElementById(`${i}-${j}`).value = value;
        }
    }
}


let level = 'none';

// First 'page'
function startGame(){
    document.getElementById('first').style.display = 'none';
    document.getElementById('second').style.display = 'flex';
}

startButton.onclick = startGame;

// Second 'page'

function chooseLevel(){
  //level = lvl;
  document.getElementById('second').style.display = 'none';
  document.body.innerHTML = 'yeah';
}

easyButton.onclick = function(){
  level = 'easy';
  
  document.getElementById('second').style.display = 'none';
  document.getElementById('third').style.display = 'block';
  
};


