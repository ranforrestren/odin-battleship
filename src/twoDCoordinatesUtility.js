// Library that provides functions for checking whether sets of 2D coordinates are valid and whether sets of coordinates collide
// define size of the grid
const GRID_SIZE_X = 10;
const GRID_SIZE_Y = 10;

const twoDCoordinatesUtility = (() => {
    const checkValidPoint = (coordinates) => {
        if (!Array.isArray(coordinates)) {
            throw new Error("Coordinates are not an array!");
        };
        if (coordinates.length !== 2) {
            throw new Error("Coordinates should have two elements!");
        };
        if (typeof coordinates[0] !== "number" || typeof coordinates[1] !== "number") {
            throw new Error("Coordinates should be numbers!");
        };
        if (coordinates[0] >= GRID_SIZE_X || coordinates[1] >= GRID_SIZE_Y) {
            throw new Error("Coordinates should be within the grid size!");
        };
        if (coordinates[0] < 0 || coordinates[1] < 0) {
           throw new Error("Coordinates should be greater than 0!");
        };
        if (!Number.isInteger(coordinates[0]) || !Number.isInteger(coordinates[1])) {
            throw new Error("Coordinates should be integer values!")
        }
        return true;
    };
    const checkValidLine = () => {
        
    };
    const checkCollisionPoints = () => {
        
    };
    const checkCollisionLines = () => {
        
    };
    return { checkValidPoint, checkValidLine, checkCollisionPoints, checkCollisionLines, checkCollisionPoints}
})()

export { GRID_SIZE_X, GRID_SIZE_Y, twoDCoordinatesUtility };