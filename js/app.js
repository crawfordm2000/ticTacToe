/******************* GLOBAL VARIABLES ***********************/

const tiles = document.querySelectorAll('.box');//The array of divs in my html. 
let counter = 0; // used to determine whether an x or o is placed in the div.
let moves = []; // this array captures all the values of the divs and allows me to check the win conditions.
const button = document.querySelector('.btn');
const green = "#1ec20c";
const red = "#d41e1e";
const background = document.querySelector('.container');

/********************* FUNCTIONS *********************/

//Sets the font color of a specific div.
let color = (index, value) => tiles[index].style.color = value;
//gets a random number between zero and eight. 
let randomNumber = () => {return Math.floor((Math.random() * 9) + 0)}
//Sets Win or Lose Color.
let winColor = (box1, box2, box3) => {
    if(moves[box1] == "X"){
        color(box1, green); color(box2, green); color(box3, green);
    } else if (moves[box1] == "O"){
        color(box1, red); color(box2, red); color(box3, red);
    }
    disableClicks();
    resetButton();
}
// enables the player to make a game decision. 
const enableClicks = () => {
    tiles.forEach(tiles => tiles.addEventListener('click', onClick));
    background.style.backgroundColor = "#f4f4f4";
}
// disables the game board
const disableClicks = () => {
    tiles.forEach(tiles => tiles.removeEventListener('click', onClick));
    background.style.backgroundColor = "#3d3d3d";
}
// allows the player to start the first game
let startButton = () => {button.addEventListener('click', enableClicks)}
// activated after a complete game
let resetButton = () => {
    button.innerText = "Reset";
    button.addEventListener('click', function(){
        tiles.forEach(tiles => tiles.innerText = "");
        counter = 0;
        button.innerText = "Play";
        moves = [];
        tiles.forEach(tiles => tiles.style.color = "#f4f4f4");
        startButton();
    });
}
// when called, a random number between zero and eight is set to 'x'. If tile[x] is undefined, add an 'O', else pick another number
// and try again.
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
    }, 170);    
}
// sets the player choice inside an array. Sets inner text to "x"
const onClick = (event) => {
    if(counter % 2 === 0 && !event.target.innerText){
        moves[event.target.id] = 'X';
        event.target.innerText = 'X';
        counter++;
        winCheck(); 
        randomChoice();
    } 
}
//This is the condition that must be met for a win to occur. 
let winCond = (box1, box2, box3) => {
    if (moves[box1] != undefined && moves[box1] === moves[box2] && moves[box1] === moves[box3]){
        resetButton();
        return true;
    } else{
        return false;
    }
}
//Checks win conditions and disables the game board by calling winner, then calls the color function
let winCheck = () => {
    if(winCond (0,1,2) === true){
        winColor(0,1,2);
    } else if (winCond(3,4,5) === true){
        winColor(3,4,5);
    } else if (winCond(6,7,8) === true){
        winColor(6,7,8);
    } else if (winCond(0,4,8) === true){
         winColor(0,4,8);
    } else if (winCond(2,4,6) === true){
         winColor(2,4,6);   
    } else if (winCond(0,3,6) === true){
         winColor(0,3,6);
    } else if (winCond(1,4,7) === true){
         winColor(1,4,7);
    } else if (winCond(2,5,8) === true){
         winColor(2,5,8);
    } else if (counter === 9){
        tiles.forEach(tiles => tiles.style.color = "grey");   
    } else {
        return false;
    }
}
   
startButton();









