const tiles = document.querySelectorAll('.box');// array of divs 
let counter = 0; // used to determine whether an x or o is placed in the div
let moves = []; // this array captures all the values of the divs to check the win conditions
const button = document.querySelector('.btn');
const green = "#1ec20c";
const slider = document.querySelector('.slider');
slider.addEventListener('click', function(){
    console.log('I be sliding');
})
const background = document.querySelector('.container');
let color = (index, value) => tiles[index].style.color = value;
let randomNumber = () => {return Math.floor((Math.random() * 9) + 0)}
let random;



//Helper Functions
const enableClicks = () => {
    tiles.forEach(tiles => tiles.addEventListener('click', onClick));
    background.style.backgroundColor = "#f4f4f4";
}

const disableClicks = () => {
    tiles.forEach(tiles => tiles.removeEventListener('click', onClick));
    background.style.backgroundColor = "#3d3d3d";

}

let startButton = () => {
    button.addEventListener('click', enableClicks);
    button.innerText = "Play";
}

let resetButton = () => {
    button.innerText = "Reset";
    button.addEventListener('click', reset);
}

let winner = () => {
    //console.log((counter % 2 === 0) ? "Player 2 Wins" : "Player 1 Wins"); 
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

const reset = () => { 
    console.log(tiles);
    tiles.forEach(tiles => tiles.innerText = "");
    counter = 0;
    button.innerText = "Play";
    moves = [];
    tiles.forEach(tiles => tiles.style.color = "#f4f4f4");
    startButton();
    // location.reload();
}

const randomChoice = () => {
    var x = randomNumber();
    setTimeout(() => {
        if(moves[x] === undefined){
            tiles[x].innerText = 'O';
            moves[x] = 'O';
            counter++;
            winCheck();
        } else if(moves[x] !== undefined && counter <= 8){
            randomChoice();   
        }
    }, 600);  
     
}




// const onClick = (event) => {
//     if(counter % 2 === 0 && !event.target.innerText){
//         moves[event.target.id] = 'X';
//         event.target.innerText = 'X';
//         counter++;
//     } else if (!event.target.innerText){
//         moves[event.target.id] = 'O';
//         event.target.innerText = 'O';
//         counter++;
//     }
//     winCheck(); 
// }


const onClick = (event) => {
    if(counter % 2 === 0 && !event.target.innerText){
        moves[event.target.id] = 'X';
        event.target.innerText = 'X';
        counter++;
        randomChoice();
    }
    winCheck(); 
}
    

//Checks win conditions
let winCheck = () => {
    if(moves[0] != undefined && moves[0] === moves[1] && moves[0] === moves[2]){
        winner();
        color(0, green); color(1, green); color(2, green);
    } else if (moves[3] != undefined && moves[3] === moves[4] && moves[5] === moves[3]){
        winner();
        color(3, green); color(4, green); color(5, green);
    } else if (moves[6] != undefined && moves[6] === moves[7] && moves[8] === moves[6]){
        winner();
        color(6, green); color(7, green); color(8, green);
    } else if (moves[0] != undefined && moves[0] === moves[4] && moves[8] === moves[0]){
        winner();
        color(0, green); color(4, green); color(8, green);
    } else if (moves[2] != undefined && moves[2] === moves[4] && moves[6] === moves[2]){
        winner(); 
        color(2, green); color(4, green); color(6, green);     
    } else if (moves[0] != undefined && moves[0] === moves[3] && moves[6] === moves[0]){
        winner();
        color(0, green); color(3, green); color(6, green);
    } else if (moves[1] != undefined && moves[1] === moves[4] && moves[7] === moves[1]){
        winner();
        color(1, green); color(4, green); color(7, green);
    } else if (moves[2] != undefined && moves[2] === moves[5] && moves[8] === moves[2]){
        winner();
        color(2, green); color(5, green); color(8, green);
    } else if (counter === 9){
        tiles.forEach(tiles => tiles.style.color = "grey");
        winner();
    }
}

      
startButton();









