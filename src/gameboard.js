import twoDCoordinatesUtility from "./twoDCoordinatesUtility";

const gameboardFactory = () => {
    const board = twoDCoordinatesUtility.constructBoard();
    const ships = [];

    const placeShip = (name, length, coordinates) => {

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