import { ship } from './ship';
import { gameboard } from './gamboard';
import { player } from './player';


const game = document.querySelector('.game');
let gameb1;
let gameb2;
let gameb1squares;
let gameb2squares;
let player1;
let computer;

function gameSetUpPage() {
    let nameInput = document.createElement('input');
    let nameLabel = document.createElement('label');
    let submit = document.createElement('button');

    nameLabel.innerHTML = 'Name:';
    game.appendChild(nameLabel);
    game.appendChild(nameInput);
    
    submit.addEventListener('click', () => startGame(nameInput.value))
    submit.innerHTML = 'Start Game!';
    
    game.appendChild(submit);
    game.classList.add('setup');
}

function gamePage() {
    while (game.firstChild) {
        game.firstChild.remove();
    }

   
    gameb2 = document.createElement('div');
    gameb2.className = 'gameboard';


    let name1 = document.createElement('div');
    let name2 = document.createElement('div');
    name1.classList.add('name');
    name2.classList.add('name');

    name1.innerHTML = player1.name;
    name2.innerHTML = computer.name;

    gameb1.appendChild(name1);
    gameb2.appendChild(name2);

    for (let i = 1; i<= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            let newsquare = document.createElement('div');
            newsquare.setAttribute('x', j);
            newsquare.setAttribute('y', i);
            newsquare.className = 'square';
            gameb2.appendChild(newsquare);
        }
    }

    game.appendChild(gameb2);

    gameb2squares = gameb2.querySelectorAll('.square');
}

function startGame(name) {
    player1 = player(name);
    computer = player('Computer')
    let gameboard1 = gameboard();
    let gameboard2 = gameboard();

    player1.playerboard = gameboard1;
    computer.playerboard = gameboard2;

    while (game.firstChild) {
        game.firstChild.remove();
    }

    game.classList.remove('setup');
    game.classList.add('shipplacement')

    gameb1 = document.createElement('div');
    gameb1.className = 'gameboard';

    for (let i = 1; i<= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            let newsquare = document.createElement('div');
            newsquare.setAttribute('x', j);
            newsquare.setAttribute('y', i);
            newsquare.className = 'square';
            gameb1.appendChild(newsquare);
        }
    }

    
    gameb1squares = gameb1.querySelectorAll('.square');

    instructions = document.createElement('div');
    instructions.innerHTML = "Place your ships!";
    instrunctions.classList.add('instructions')

    game.appendChild(instructions);
    game.appendChild(gameb1);



    //gamePage(name, gameboard1, gameboard2);
}

gameSetUpPage();