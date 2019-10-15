const tiles = document.querySelectorAll('.box');// array divs
const gameBoard = document.querySelector('.container');//
let counter = 0; // used to determine whether an x or o is placed in the div
let moves = []; // this array captures all the values of the divs to check the win conditions
let button = document.querySelector('.btn');
let background = document.querySelector('.container');

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
        console.log('win');
    } else if (moves[3] != undefined && moves[3] === moves[4] && moves[5] === moves[3]){
        console.log('win');
    } else if (moves[6] != undefined && moves[6] === moves[7] && moves[8] === moves[6]){
        console.log('win');
    } else if (moves[0] != undefined && moves[0] === moves[4] && moves[8] === moves[0]){
        console.log('win');
    } else if (moves[2] != undefined && moves[2] === moves[4] && moves[6] === moves[2]){
        console.log('win');
    } else if (moves[0] != undefined && moves[0] === moves[3] && moves[6] === moves[0]){
        console.log('win');
    } else if (moves[1] != undefined && moves[1] === moves[4] && moves[7] === moves[1]){
        console.log('win');
    } else if (moves[2] != undefined && moves[2] === moves[5] && moves[8] === moves[2]){
        console.log('win');
    } else if (counter === 9){
        console.log('draw');
    }
}



// determines whether an X or O is added to the element with the event listener
let gameStart = function(){

    //changes background color of gameboard when the play button is pressed
    background.style.backgroundColor = "#f4f4f4";
    // sets text of button to reset
    button.innerText = "Reset";


    //code for the reset button to reset the gameboard after or during play
    button.addEventListener('click', function(){
    for(let i = 0; i < moves.length; i++){
        tiles[i].innerText = null;
        }
        moves = [];
    })


    
    // to loop through the 9 divs and apply event listeners to them
    tiles.forEach(function(tile , index){
        
        // adds eventListeners to each div 
        tile.addEventListener('click', function(e){
            // condition determines whether an x or o is added to the div
            if(counter % 2 == 0){
                if(!tile.innerText){ // code only runs if the innerText = '' (undefined)
                    moves[this.id] = 'X'; // this == the div clicked. '.id' refers to that divs id
                    tile.innerText = 'X' // sets innerText for the div clicked
                    counter++;
                } 
            } else {
                if(!tile.innerText){
                    moves[this.id] = 'O';
                    tile.innerText = "O"
                    counter++;
                }
   
            }
            winCheck();
            console.log(moves); 

        })
        })
}


button.addEventListener('click', gameStart);







