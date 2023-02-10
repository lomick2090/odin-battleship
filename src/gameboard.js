import { ship } from './ship';

let gameboard = () => {
    function createBoard() {
        let board = [];
        for (let i = 1; i<= 10; i++) {
            for (let j = 1; j <= 10; j++) {
                let space = {
                    contents: null,
                    hit: false,
                    x: i,
                    y: j
                }
                board.push(space)
            }
        }
        return board;
    };

    let board = createBoard();

    function returnSpace(coordinates) {
        let x = coordinates[0];
        let y = coordinates[1];
        let answer;


        board.forEach(space => {
            
            if (space.x == x && space.y == y) {
                answer = space;
                return;
            }
        });

        return answer;
    };

    function placeShip(ship, coordinates, orientation) {
        let space = returnSpace(coordinates);

        space.contents = ship;

        for (let i = 0; i < ship.shipLength; i++) {
            if (orientation = 'horizontal') {
                coordinates[0] = coordinates[0] + 1;
                space = returnSpace(coordinates);
                space.contents = ship;
            } else {
                coordinates[1] = coordinates[1] + 1;
                space = returnSpace(coordinates);
                space.contents = ship;
            }
        }

    };

    function receiveAttack(coordinates) {
        let space = returnSpace(coordinates);
        if (space.hit == false) {
            space.hit = true;
        } else {
            console.log("error, space already attacked");
            return;
        };

        if (space.contents) {
            space.contents.hit();
        };
    };

    return {
        board,
        returnSpace,
        placeShip,
        receiveAttack,
    }
};

export { gameboard }