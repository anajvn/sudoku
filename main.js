export let grid = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]];

function createNumber(){
    return Math.floor(Math.random()*9)+1;
}
function createPositions(quantity){ // Tested
    let positions = [];
    let count = 0;

    while(quantity>count){
        const line = Math.floor(Math.random()*9);
        const column = Math.floor(Math.random()*9);

        var duplicated = positions.filter(element => element[0] == line && element[1] == column);

        if(duplicated.length == 0){
            positions.push([line, column]);
            count++;            
        }
    }
    return positions;
}
function checkLine(number, line){ // Tested
    flag = false;
    for(let i=0; i<9; i++){
        if(grid[line][i]==number){
            flag = true;
        }
    }
    return flag;
}
function checkColumn(number, column){ // Tested
    flag = false;
    for(let i=0; i<9; i++){
        if(grid[i][column]==number){
            flag = true;
        }
    }
    return flag;
}
function checkSquare(number, line, column){ // Tested
    flag = false;
    let i;
    let j;
    switch(true){
        case line < 3:
            i = 0;
            break;
        case line < 6:
            i = 3;
            break;
        case line < 9:
            i = 6;
            break;
    }

    switch(true){
        case column < 3:
            j = 0;
            break;
        case column < 6:
            j = 3;
            break;
        case column < 9:
            j = 6;
            break;
    }

    for(let k=i; k<(i+3); k++){
        for(let l=j; l<(j+3); l++){
            if(grid[k][l]==number){
                flag = true;
                break;
            }
        } 
    }
    return flag;
}
export function fillGrid(quantity){
    const positions = createPositions(quantity);
    let i=0;

    while(i<quantity){
        let number = createNumber();
        let line = positions[i][0];
        let column = positions[i][1];

        if(!checkLine(number, line) && !checkColumn(number, column) && !checkSquare(number, line, column)){
            grid[line][column] = number;
            i++;
        }
    }    
}

// fillGrid(20);
// console.log(grid);

module.exports = {
    grid, fillGrid, createPositions, checkLine, checkColumn, checkSquare, 
}

export{grid, fillGrid}

