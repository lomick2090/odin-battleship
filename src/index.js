import { ship } from './ship';
import { gameboard } from './gamboard';
import { player } from './player';


const game = document.querySelector('.game');
let gameb1;
let gameb2;

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

    game.classList.remove('setup');

    gameb1 = document.createElement('div');
    gameb2 = document.createElement('div');

    gameb1.className = 'gameboard';
    gameb2.className = 'gameboard';

    for (let i = 1; i<= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            let newsquare = document.createElement('div');
            newsquare.x = i;
            newsquare.y = j;
            newsquare.className = 'square'
            gameb1.appendChild(newsquare);
        }
    }

    for (let i = 1; i<= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            let newsquare = document.createElement('div');
            newsquare.x = i;
            newsquare.y = j;
            newsquare.className = 'square'
            gameb2.appendChild(newsquare);
        }
    }

    game.appendChild(gameb1);
    game.appendChild(gameb2);
    
}

function startGame(name) {
    let player1 = player(name);
    let computer = player('Computer')
    let gameboard1 = gameboard();
    let gameboard2 = gameboard();

    player1.playerboard = gameboard1;
    computer.playerboard = gameboard2;

    gamePage(name);
}

gameSetUpPage();