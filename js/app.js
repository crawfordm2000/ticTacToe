const tiles = document.querySelectorAll('.box');// array divs
const gameBoard = document.querySelector('.container');//
let value = document.querySelectorAll('.box p');

//console.log(gameBoard);

tiles.forEach(function(i , y){
    i.addEventListener('click', function(e){
        if(y % 2 == 0){
            i.innerHTML = "<p>X</p>";
            console.log(value.value);
        } else {
            i.innerHTML = "<p>O</p>"
            console.log(value.value);
        }
    })
    })

    
    

    
