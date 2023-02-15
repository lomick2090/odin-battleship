import { gameboard } from './gameboard';
import { ship } from './ship';

let player = (name) => {
    let playerName = name;
    let playerboard;

    function attack(coordinates, board) {
        if (this.playerboard = board) {
            console.log('cannot attack own board');
        } else {
            board.recieveAttack(coordinates);
        }
    }

    return {
        attack,
        playerboard,
        get name() {
            return playerName;
        },
        set name(prompt) {
            if (typeof prompt != 'string' || prompt == ''){
                throw "Name format incorrect"
            } else {
                playerName = prompt
            }
        },
        
    }
}

export { player }