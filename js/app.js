const tiles = document.querySelectorAll('.box');// array of divs 
let counter = 0; // used to determine whether an x or o is placed in the div
let moves = []; // this array captures all the values of the divs to check the win conditions
const button = document.querySelector('.btn');
const green = "#1ec20c";
const red = "#d41e1e";
const slider = document.querySelector('.slider');
//let sliderTurn = true;
const background = document.querySelector('.container');
let color = (index, value) => tiles[index].style.color = value;
let randomNumber = () => {return Math.floor((Math.random() * 9) + 0)}


//Helper Functions
let winColor = (box1, box2, box3) => {
    if(moves[box1] == "X"){
        color(box1, green); color(box2, green); color(box3, green);
    } else if (moves[box1] == "O"){
        color(box1, red); color(box2, red); color(box3, red);
    }
}

const enableClicks = () => {
    tiles.forEach(tiles => tiles.addEventListener('click', onClick));
    background.style.backgroundColor = "#5c5c5c";
}

const disableClicks = () => {
    tiles.forEach(tiles => tiles.removeEventListener('click', onClick));
    background.style.backgroundColor = "#3d3d3d";

}
let startButton = () => {button.addEventListener('click', enableClicks)}
    
let resetButton = () => {
    button.innerText = "Reset";
    button.addEventListener('click', reset);
}

const reset = () => { 
    console.log(tiles);
    tiles.forEach(tiles => tiles.innerText = "");
    counter = 0;
    button.innerText = "Play";
    moves = [];
    tiles.forEach(tiles => tiles.style.color = "#f4f4f4");
    startButton();
}

const randomChoice = () => {
    winCheck();
    var x = randomNumber();
    setTimeout(() => {
        if(moves[x] === undefined && winCheck() === false){
            tiles[x].innerText = 'O';
            moves[x] = 'O';
            winCheck();
            counter++;
        } else if(moves[x] !== undefined && counter <= 8 && winCheck() === false){
            randomChoice();   
        }
    }, 150);    
}

const onClick = (event) => {
    if(counter % 2 === 0 && !event.target.innerText){
        moves[event.target.id] = 'X';
        event.target.innerText = 'X';
        counter++;
        winCheck(); 
        randomChoice();
    } 
}


let winner = () => {
    if(counter === 9){
        console.log('draw');
    } else if(counter != 9 && counter % 2 === 0){
        console.log('Player 2 Wins');
    } else if(counter != 9 && counter % 2 !== 0){
        console.log('Player 1 Wins');
    }
    disableClicks();
    resetButton();
}
    

//Checks win conditions
let winCheck = () => {
    if(moves[0] != undefined && moves[0] === moves[1] && moves[0] === moves[2]){
        winner(); 
        winColor(0,1,2);
    } else if (moves[3] != undefined && moves[3] === moves[4] && moves[5] === moves[3]){
        winner(); 
        winColor(3,4,5);
    } else if (moves[6] != undefined && moves[6] === moves[7] && moves[8] === moves[6]){
        winner(); 
        winColor(6,7,8);
    } else if (moves[0] != undefined && moves[0] === moves[4] && moves[8] === moves[0]){
        winner();
        winColor(0,4,8);
    } else if (moves[2] != undefined && moves[2] === moves[4] && moves[6] === moves[2]){
        winner();  
        winColor(2,4,6);   
    } else if (moves[0] != undefined && moves[0] === moves[3] && moves[6] === moves[0]){
        winner(); 
        winColor(0,3,6);
    } else if (moves[1] != undefined && moves[1] === moves[4] && moves[7] === moves[1]){
        winner(); 
        winColor(1,4,7);
    } else if (moves[2] != undefined && moves[2] === moves[5] && moves[8] === moves[2]){
        winner(); 
        winColor(2,5,8);
    } else if (counter === 9){
        tiles.forEach(tiles => tiles.style.color = "grey");
        winner();
    } else {
        return false;
    }

}

     
startButton();









// const human = (event) => {
// if(counter % 2 === 0 && !event.target.innerText){
//     moves[event.target.id] = 'X';
//     event.target.innerText = 'X';
//     counter++;
// } else if (!event.target.innerText){
//     moves[event.target.id] = 'O';
//     event.target.innerText = 'O';
//     counter++;
// }
// winCheck(); 
// }


// const enableHuman = () => {
//     tiles.forEach(tiles => tiles.addEventListener('click', human));
//     background.style.backgroundColor = "#5c5c5c";
// }