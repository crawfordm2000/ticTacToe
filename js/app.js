const tiles = document.querySelectorAll('.box');// array divs
const gameBoard = document.querySelector('.container');//
let counter = 0;
let moves = []

//console.log(gameBoard);

tiles.forEach(function(tile , y){
    

    let play = document.createElement('p');
    

    tile.addEventListener('click', function(e){

        if(counter % 2 == 0){
            if(!play.innerText){
                //console.log(this)
                //moves[this.id - 1] = 'X'
                //console.log(moves)
                play.innerText = "X";
                tile.appendChild(play);
                counter++;
            } 
        } else {
            if(!play.innerText){
                play.innerText = "O";
                tile.appendChild(play);
                counter++;
            }
            
        }

        console.log(play.innerText);
        
    })
    })
