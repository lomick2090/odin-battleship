import { gameboard } from './gameboard';
import { ship } from './ship';

let player = () => {
    let playerName = '';
    function attack(coordinates) {

    }

    return {
        attack,
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