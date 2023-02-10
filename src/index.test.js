import { ship } from './ship.js';
import { gameboard } from './gameboard.js';


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

    test('test gameboard coordinates', () => {
        let array = [];
        mockboard.board.forEach(space => array.push([space.x, space.y]))
        expect(array[0][0]).toBe(1);
        expect(array[0][1]).toBe(1);
        expect(array[1][0]).toBe(1);
        expect(array[1][1]).toBe(2);
    });

    test('return space function', () => {
        let space = mockboard.returnSpace([1,3]);
        expect(space.x).toBe(1);
        expect(space.y).toBe(3);
    });

    test('test ship placement', () => {
        let mockship = ship(2);
        mockboard.placeShip(mockship, [1,1], 'vertical');
        expect(mockboard.board[0].contents).toBe(mockship);
        expect(mockboard.board[10].contents).toBe(mockship);
    })
});