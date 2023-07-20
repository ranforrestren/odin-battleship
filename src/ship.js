import twoDCoordinatesUtility from "./twoDCoordinatesUtility";

// Constructs ship objects which will be held in an array in gameboard objects
// track ship names, hits taken, status (sunk/not), and check for hits
const shipFactory = (name, length, coordinates) => {

    // assign properties
    // check arguments are legal
    if (name === undefined || length === undefined || coordinates == undefined) {
        throw new Error('Expected parameters name, length, coordinates');
    }
    if (typeof name !== 'string') {
        throw new Error('String expected as name!');
    }
    if (typeof length !== 'number') {
       throw new Error('Number expected as length!');
    }
    if (typeof length === 0) {
        throw new Error('Length cannot be 0!');
    }
    if (coordinates.length !== length) {
        throw new Error('Length and number of coordinates should be the same!')
    }
    
    let hits = 0;
    let sunkStatus = false;

    const getHits = () => {
        return hits;
    };

    const isHit = (hitCoordinates) => {
        // function to check if hit coordinates match current coordinates
        if ( twoDCoordinatesUtility.checkCollisionLines(hitCoordinates, coordinates) ) { 
            hits += 1;
        };
    };

    const isSunk = () => {
        return hits === length ? true : false;
    };
    
    return {getHits, isHit, isSunk};
}

export default shipFactory;
