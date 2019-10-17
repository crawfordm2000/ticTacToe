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

// slider.addEventListener('click', function(){
//     if(sliderTurn == true){
//         sliderTurn = false;
//     } else if (sliderTurn === false){
//         sliderTurn = true;
//     }
    
// })


//Helper Functions

const human = (event) => {
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

const enableHuman = () => {
    tiles.forEach(tiles => tiles.addEventListener('click', human));
    background.style.backgroundColor = "#5c5c5c";
}

const enableClicks = () => {
    tiles.forEach(tiles => tiles.addEventListener('click', onClick));
    background.style.backgroundColor = "#5c5c5c";
}

const disableClicks = () => {
    tiles.forEach(tiles => tiles.removeEventListener('click', onClick));
    background.style.backgroundColor = "#3d3d3d";

}

let startButton = () => {
    button.addEventListener('click', enableClicks)}
    
//     {
//         button.innerText = "Play";
//         if(slider === true){
//             enableClicks();
//         } else {
//             enableHuman();
//         }

//     });
    
// }

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
    // location.reload();
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
    

//Checks win conditions
let winCheck = () => {
    if(moves[0] != undefined && moves[0] === moves[1] && moves[0] === moves[2]){
        winner();
        if(moves[0] == "X"){
            color(0, green); color(1, green); color(2, green);
            console.log('hey');
        }else if(moves[0] == "O"){
            color(0, red); color(1, red); color(2, red);
        }  
    } else if (moves[3] != undefined && moves[3] === moves[4] && moves[5] === moves[3]){
        winner();
        if(moves[3] == "X"){
            color(3, green); color(4, green); color(5, green);
            console.log('hey');
        }else if(moves[3] == "O"){
            color(3, red); color(4, red); color(5, red);
        } 
    } else if (moves[6] != undefined && moves[6] === moves[7] && moves[8] === moves[6]){
        winner();
        if(moves[6] == "X"){
            color(6, green); color(7, green); color(8, green);
            console.log('hey');
        }else if(moves[6] == "O"){
            color(6, red); color(7, red); color(8, red);
        } 
    } else if (moves[0] != undefined && moves[0] === moves[4] && moves[8] === moves[0]){
        winner();
        if(moves[0] == "X"){
            color(0, green); color(4, green); color(8, green);
            console.log('hey');
        }else if(moves[0] == "O"){
            color(0, red); color(4, red); color(8, red);
        } 
    } else if (moves[2] != undefined && moves[2] === moves[4] && moves[6] === moves[2]){
        winner(); 
        if(moves[2] == "X"){
            color(2, green); color(4, green); color(6, green);
            console.log('hey');
        }else if(moves[2] == "O"){
            color(2, red); color(4, red); color(6, red);
        }     
    } else if (moves[0] != undefined && moves[0] === moves[3] && moves[6] === moves[0]){
        winner();
        if(moves[0] = "X"){
            color(0, green); color(3, green); color(6, green);
            console.log('hey');
        }else if(moves[0] == "O"){
            color(0, red); color(3, red); color(6, red);
        } 
    } else if (moves[1] != undefined && moves[1] === moves[4] && moves[7] === moves[1]){
        winner();
        if(moves[1] == "X"){
            color(1, green); color(4, green); color(7, green);
            console.log('hey');
        }else if(moves[1] == "O"){
            color(1, red); color(4, red); color(7, red);
        } 
    } else if (moves[2] != undefined && moves[2] === moves[5] && moves[8] === moves[2]){
        winner();
        if(moves[2] == "X"){
            color(2, green); color(5, green); color(8, green);
            console.log('hey');
        }else if(moves[2] == "O"){
            color(2, red); color(5, red); color(8, red);
        } 
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