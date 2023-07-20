import twoDCoordinatesUtility from "./twoDCoordinatesUtility";

const gameboardFactory = () => {
    const board = twoDCoordinatesUtility.constructBoard();
    const ships = [];

    const placeShip = (name, length, coordinates) => {
        for (let coord of coordinates) {
            if (board[coord[0]][coord[1]] === 0) {
                board[coord[0]][coord[1]] = 1;
            } else {
                throw new Error("Cannot place ship here!");
            }
        }
    }
    const receiveAttack = () => {

    };
    const isAllSunk = () => {

    };
    const getBoard = () => {
        return board;
    };

    return { placeShip, receiveAttack, isAllSunk, getBoard };
}

export default gameboardFactory;