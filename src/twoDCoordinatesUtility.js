// Library that provides functions for checking whether sets of 2D coordinates are valid and whether sets of coordinates collide
// define size of the grid
const X_GRID_SIZE = 10;
const Y_GRID_SIZE = 10;

const twoDCoordinatesUtility = (() => {

    // creates new X_GRID_SIZE x Y_GRID_SIZE 2D array filled with "0" elements
    const constructBoard = () => {
        const board = Array.from({length: X_GRID_SIZE}, () => Array(Y_GRID_SIZE).fill(0));
        return board;
    }

    const checkCollisionPoints = (point1, point2) => {
        if (point1[0] === point2[0] && point1[1] === point2[1]) {
            return true;
        } else {
            return false;
        }
    };

    const checkCollisionLines = (point1, coordinates) => {
        for (let point of coordinates) {
            if (checkCollisionPoints(point1, point)) {
                return true;
            }
        }
        return false;
    };

    return { constructBoard, checkCollisionPoints, checkCollisionLines }
})()

export default twoDCoordinatesUtility;