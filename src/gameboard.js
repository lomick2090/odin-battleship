let gameboard = () => {
    function createBoard() {
        let board = [];
        for (let i = 1; i<= 10; i++) {
            for (let j = 1; j <= 100; j++) {
                let space = {
                    empty: true,
                    hit: false,
                    x: j,
                    y: i
                }
                board.push(space)
            }
        }
        return board;
    }


    let board = createBoard();

    return {
        board,
    }
};

export { gameboard }