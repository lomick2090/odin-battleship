import { ship } from './ship';
import { gameboard } from './gameboard';
import { player } from './player';

const game = document.querySelector('.game');
let gameb1;
let gameb2;
let gameb1squares;
let gameb2squares;
let player1;
let computer;
let gameboard1;
let gameboard2;
let orientation = 'horizontal';

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

function startGame(name) {
    player1 = player(name);
    computer = player('Computer')
    gameboard1 = gameboard();
    gameboard2 = gameboard();
    let ships = [ship(2), ship(2), ship(3), ship(4), ship(5)];
    
    let cruiser1 = document.createElement('img');
    cruiser1.id = 'cruiser1';
    let cruiser2 = document.createElement('img');
    cruiser2.id = 'cruiser2';
    let submarine = document.createElement('img');
    submarine.id = 'submarine';
    let carrier = document.createElement('img');
    carrier.id = 'carrier';
    let battleship = document.createElement('img');
    battleship.id = 'battleship';

    let shipimages = [cruiser1, cruiser2, submarine, carrier, battleship]
    

    player1.playerboard = gameboard1;
    computer.playerboard = gameboard2;

    while (game.firstChild) {
        game.firstChild.remove();
    }

    game.classList.remove('setup');
    game.classList.add('shipplacement')

    gameb1 = document.createElement('div');
    gameb1.className = 'gameboard';

    function displayShip() {
        while (instructions.firstChild) {
            instructions.firstChild.remove();
        }

        let shipDiv = document.createElement('div');
        shipDiv.classList.add('shipdiv');

        let shipVisual = document.createElement('div');
        shipVisual.classList.add('shipvisual')
        if (orientation == 'vertical') {
            shipimages[0].style.transform = 'rotate(90deg) translateY(-39px)';
            shipimages[0].style.transformOrigin = 'top left';
        } else {
            shipimages[0].style.transform = 'rotate(0deg)';
        }
        shipVisual.appendChild(shipimages[0]);

        let shipDirections = document.createElement('div');
        let shipOrientation = document.createElement('button');
        shipOrientation.innerHTML = orientation;

        shipDirections.innerHTML = 'Click on the board to place this ship';
        shipOrientation.addEventListener('click', () => {
            if (orientation == 'vertical') {
                orientation = 'horizontal';
                displayShip();
            } else {
                orientation = 'vertical';
                displayShip();
            }
        });

        shipDiv.appendChild(shipDirections);
        shipDiv.appendChild(shipVisual);
        shipDiv.appendChild(shipOrientation);
        instructions.appendChild(shipDiv)
    }

    function addShip(newsquare)  {
        if (ships.length > 0) {
            if (gameboard1.checkShipPlacement(ships[0], [newsquare.getAttribute('x'), newsquare.getAttribute('y')], orientation)) {
                gameboard1.placeShip(ships[0], [newsquare.getAttribute('x'), newsquare.getAttribute('y')], orientation);
                newsquare.appendChild(shipimages[0]);
                shipimages.shift();
                ships.shift();
                if (ships.length == 0) {
                    gamePage();
                } else {
                    displayShip();
                }
            }
        }
    };


    for (let i = 1; i<= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            let newsquare = document.createElement('div');
            newsquare.setAttribute('x', j);
            newsquare.setAttribute('y', i);
            newsquare.className = 'square';
            newsquare.addEventListener('click', () => addShip(newsquare))
            gameb1.appendChild(newsquare);
        }
    }

    
    gameb1squares = gameb1.querySelectorAll('.square');

    let instructions = document.createElement('div');
   // instructions.innerHTML = "Place your ships!";
    instructions.classList.add('instructions');

    game.appendChild(instructions);
    game.appendChild(gameb1);
    displayShip();

}

function gamePage() {
    while (game.firstChild) {
        game.firstChild.remove();
    }

    game.classList.remove('shipplacement');

   
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

    function userAttacks(newsquare) {
        let x = newsquare.getAttribute('x');
        let y = newsquare.getAttribute('y');
        let icon = document.createElement('img');
        newsquare.appendChild(icon);
        let boardSquare = gameboard2.returnSpace([x,y])

        if(gameboard2.receiveAttack([x,y])) {
            icon.id = ('hitmarker');
            if (boardSquare.contents.isSunk) {
                switch (boardSquare.contents.shipLength) {
                    case 2:
                        alert('You sunk their Cruiser!')
                        break;
                    case 3:
                        alert('You sunk their Submarine!')
                        break;
                    case 4:
                        alert('You sunk their Carrier!')
                        break;
                    case 5:
                        alert('You sunk their Battleship!')
                        break;
                }
            }

            if (gameboard2.checkGameEnd()) {
                alert('You Win!')
            }
        } else {
            icon.id = ('missmarker');
        }
    }

    for (let i = 1; i<= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            let newsquare = document.createElement('div');
            newsquare.setAttribute('x', j);
            newsquare.setAttribute('y', i);
            newsquare.className = 'square';
            newsquare.addEventListener('click', () => userAttacks(newsquare))
            gameb2.appendChild(newsquare);
        }
    }

    gameboard2.placeShip(ship(3), [3,3], 'vertical');

    game.appendChild(gameb1);
    game.appendChild(gameb2);

    gameb2squares = gameb2.querySelectorAll('.square');
}


gameSetUpPage();