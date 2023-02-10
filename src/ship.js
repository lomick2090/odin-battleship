let ship = (length) => {

    let shipLength = length
    let shipHits = 0

    return {
        get shipLength() {
            return shipLength;
        },
        get shipHits() {
            return shipHits;
        },
        hit: () => {
            shipHits++
        },
        get isSunk() {
            return (shipHits >= shipLength) ? true : false;
        },
    }
}

export { ship }