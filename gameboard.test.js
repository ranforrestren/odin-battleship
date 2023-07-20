import gameboardFactory from "./src/gameboard";

test('creating a gameboard initializes an board of "0"s correctly', () => {
    const gameboard = gameboardFactory();
    const board = gameboard.getBoard();
    for (let i of board) {
        for (let j of i) {
            expect( j ).toBe(0);
        }
    }
})

test('places ship object correctly', () => {
    const gameboard = gameboardFactory();

    // expect no error during construction
    expect( () => { 
        gameboard.placeShip('Destroyer', 3, [[0,0],[1,0],[2,0]]);
    }).not.toThrow(Error);

    // expect ship object to appear on board
    const board = gameboard.getBoard();
    expect( board[0][0] ).toBe(1);
    expect( board[1][0] ).toBe(1);
    expect( board[2][0] ).toBe(1);
})

test('does not place ship object (out of bounds)', () => {
    expect( () => { 
        const gameboard = gameboardFactory();
        gameboard.placeShip('Destroyer', 3, [[10,0],[11,0],[12,0]]);
    }).toThrow(Error);
})

test('does not place ship object (collision)', () => {
    expect( () => { 
        const gameboard = gameboardFactory();
        gameboard.placeShip('Destroyer', 3, [[1,0],[2,0],[3,0]]);
        gameboard.placeShip('Submarine', 3, [[1,0],[1,1],[1,2]]);
    }).toThrow(Error);
})