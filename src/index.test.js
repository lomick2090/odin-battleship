import { ship } from './ship.js';
import { gameboard } from './gameboard.js';
import { player } from './player'


test('unit test', () => {
    expect('hello world').toBe('hello world');
});

describe('testing ship functions', () => {
    let mockship = ship(2);

    test('test ship initialization', () => {
        expect(mockship.shipLength).toBe(2);
    });

    test('test no ship hits',() => {
        expect(mockship.shipHits).toBe(0);
    });

    test('test ship not sunk', () => {
        expect(mockship.isSunk).toBe(false);
    })

    test('test ship hits',() => {
        mockship.hit();
        mockship.hit();
        expect(mockship.shipHits).toBe(2);
    });

    test('test ship sunk', ()=> {
        expect(mockship.isSunk).toBe(true);
    });
});

describe('testing gameboard functions', () => {

    let mockboard = gameboard();
    afterEach(()=> {
        mockboard = gameboard();
    })

    test('test gameboard coordinates', () => {
        let array = [];
        mockboard.board.forEach(space => array.push([space.x, space.y]))
        expect(array[0][0]).toBe(1);
        expect(array[0][1]).toBe(1);
        expect(array[1][0]).toBe(1);
        expect(array[1][1]).toBe(2);
    });

    test('test returnSpace function', () => {
        let space = mockboard.returnSpace([1,3]);
        expect(space.x).toBe(1);
        expect(space.y).toBe(3);
    });

    test('test ship placement', () => {
        let mockship = ship(2);
        mockboard.placeShip(mockship, [1,1], 'vertical');
        expect(mockboard.board[0].contents).toBe(mockship);
        expect(mockboard.board[1].contents).toBe(mockship);
        expect(mockboard.board[2].contents).toBe(null);
    })

    test('test attack', () => {
        mockboard.receiveAttack([5,3]);
        expect(mockboard.returnSpace([5,3]).hit).toBe(true);
    })

    test('invalid ship placement', () => {
        let mockship = ship(2);
        mockboard.placeShip(mockship, [1,1], 'vertical');
        expect(mockboard.checkShipPlacement(mockship, [1,1], 'vertical')).toBe(false);
    });

    test('check validity before placement', () => {
        let mockship1 = ship(2);
        let mockship2 = ship(2);
        mockboard.placeShip(mockship1, [1,1], 'vertical');
        if (mockboard.checkShipPlacement(mockship2, [1,2], 'horizontal')){
            mockboard.placeShip(mockship1, [1,2], 'horizontal');
        }
        else if (mockboard.checkShipPlacement(mockship2, [1,3], 'horizontal')) {
            mockboard.placeShip(mockship2, [1,3], 'horizontal');
        }

        expect(mockboard.returnSpace([1,2]).contents).toBe(mockship1);
        expect(mockboard.returnSpace([1,3]).contents).toBe(mockship2);
    })

    test('test game end', () => {
        let mockship = ship(2);
        mockboard.placeShip(mockship, [1,1], 'vertical');
        expect(mockboard.checkGameEnd()).toBe(false);
        mockboard.receiveAttack([1,1]);
        mockboard.receiveAttack([1,2]);
        expect(mockboard.checkGameEnd()).toBe(true);
    })
});

describe('testing player', () => {
    let player1 = player()
    test('check player naming', () => {
        player1.name = 'bobby';
        expect(player1.name).toBe('bobby')
    })
}); 