import { ship } from './ship';
import { gameboard } from './gamboard';
import { player } from './player';


const game = document.querySelector('.game');

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
    game.classList.add('setup')
}

function startGame(name) {
    let player1 = player(name);
    let computer = player('Computer')
    let gameboard1 = gameboard();
    let gameboard2 = gameboard();

    player1.playerboard = gameboard1
    computer.playerboard = gameboard2;
}

gameSetUpPage();