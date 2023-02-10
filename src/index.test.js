import {ship} from './ship';


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