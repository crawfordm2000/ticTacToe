const tiles = document.querySelectorAll('.box');// array divs
const gameBoard = document.querySelector('.container');//

let moves = []

//console.log(gameBoard);

tiles.forEach(function(i , y){
    

    let play = document.createElement('p');
    

    i.addEventListener('click', function(e){

        if(y % 2 == 0){
            console.log(this)
            moves[this.id - 1] = 'X'
            console.log(moves)
            
            play.innerText = "X";
            i.appendChild(play);
        } else {
            
            play.innerText = "O";
            i.appendChild(play);
        }

        console.log(play.innerText);
        
    })
    })

    
    

    
