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

    let ships = [];

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

    function checkShipPlacement(ship, coordinates, orientation) {
        let space = returnSpace(coordinates);
        let answer = true;

        for (let i = 1; i < ship.shipLength; i++) {
            if (space.contents != null) {
                answer = false;
            }
            if (orientation == 'horizontal') {
                coordinates[0] = coordinates[0]++;
                space = returnSpace(coordinates);
            } else {
                coordinates[1] = coordinates[1]++;
                space = returnSpace(coordinates);
            }
        };
        return answer;
    }

    function placeShip(ship, coordinates, orientation) {
        let space = returnSpace(coordinates);
        space.contents = ship;
        console.log(space.contents)
        ships.push(ship)

        for (let i = 1; i < ship.shipLength; i++) {
            if (orientation == 'horizontal') {
                coordinates[0] = coordinates[0]++;
                space = returnSpace(coordinates);
                space.contents = ship;
            } else {
                console.log(space)
                console.log(coordinates)
                coordinates[1] = coordinates[1]++;
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

    function checkGameEnd() {
        let answer = true;
        ships.forEach(ship => {
            if (ship.isSunk == false) {
            answer = false;
            }
        });

        return answer;
    }

    return {
        board,
        ships,
        returnSpace,
        placeShip,
        receiveAttack,
        checkShipPlacement,
        checkGameEnd
    }
};

export { gameboard }