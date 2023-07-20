// Library that provides functions for checking whether sets of 2D coordinates are valid and whether sets of coordinates collide
// define size of the grid

const twoDCoordinatesUtility = (() => {

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

    return { checkCollisionPoints, checkCollisionLines }
})()

export default twoDCoordinatesUtility;