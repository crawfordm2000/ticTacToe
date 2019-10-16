const tiles = document.querySelectorAll('.box');// array of divs 
let counter = 0; // used to determine whether an x or o is placed in the div
let moves = []; // this array captures all the values of the divs to check the win conditions
const button = document.querySelector('.btn');
const background = document.querySelector('.container');

//Helper Functions
const enableClicks = () => {
    tiles.forEach(tiles => tiles.addEventListener('click', onClick));
    background.style.backgroundColor = "#f4f4f4";
}

const disableClicks = () => tiles.forEach(tiles => tiles.removeEventListener('click', onClick));

let startButton = () => {
    button.addEventListener('click', enableClicks);
    
}

let resetButton = () => {
    button.innerText = "Reset";
    button.addEventListener('click', reset);
}

let winner = () => {
    console.log((counter % 2 === 0) ? "Player 2 Wins" : "Player 1 Wins"); 
    resetButton();
    if(counter % 2 === 0){
        tiles.style.backgroundColor = "red";
    } else {
        tiles.style.backgroundColor = "blue";
    }
}

const reset = () => { 
    for(let i = 0; i < moves.length; i++){
            tiles[i].innerText = "";
        }
            counter = 0;
            button.innerText = "Play";
            startButton();
            moves = [];
        }


const onClick = (event) => {
    if(counter % 2 === 0 && !event.target.innerText){
        moves[event.target.id] = 'X';
        event.target.innerText = 'X';
        counter++;
    } else if (!event.target.innerText){
        moves[event.target.id] = 'O';
        event.target.innerText = 'O';
        counter++;
    }
    winCheck(); 
}



const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]



//Checks win conditions
let winCheck = function(){
    if(moves[0] != undefined && moves[0] === moves[1] && moves[0] === moves[2]){
        winner();
        disableClicks();
    } else if (moves[3] != undefined && moves[3] === moves[4] && moves[5] === moves[3]){
        winner();
        disableClicks();
    } else if (moves[6] != undefined && moves[6] === moves[7] && moves[8] === moves[6]){
        winner();
        disableClicks();
    } else if (moves[0] != undefined && moves[0] === moves[4] && moves[8] === moves[0]){
        winner();
        disableClicks();
    } else if (moves[2] != undefined && moves[2] === moves[4] && moves[6] === moves[2]){
        winner();
        disableClicks();        
    } else if (moves[0] != undefined && moves[0] === moves[3] && moves[6] === moves[0]){
        winner();
        disableClicks();
    } else if (moves[1] != undefined && moves[1] === moves[4] && moves[7] === moves[1]){
        winner();
        disableClicks();
    } else if (moves[2] != undefined && moves[2] === moves[5] && moves[8] === moves[2]){
        winner();
        disableClicks();
    } else if (counter === 9){
        console.log('draw');
        reset();
    }
}

      
startButton();








