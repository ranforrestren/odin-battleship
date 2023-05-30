// tries to create a ship object and set it on the board + shiplist
// calculates ship name / size from shipsList
// Carrier (5) -> Battleship (4) -> Destroyer (3) -> Submarine (3) -> Patrol Boat (2)
function setShip(startPos, orientation, gameboard, shipsList) {
    // calculate which ship to add
    // const shipType = calculateShip(shipsList)
    // calculate positions array (positions)
    // const positions = calculatePositions(shipType, startPos, orientation)
    // check whether positions are legal
    // calculateLegal(positions, gameboard)
    // * should throw error if illegal!
    // finally, create the object and return it!
    // ship = shipFactory(ship, positions)
    // return ship
    // separate function to add ship to shipsList array?
}

const shipFactory = (shipType, positions) => {
    // checkHit(position)
    // checks if position is hit
    // getstatus()
    // just reports whether ship is destroyed
}

module.exports = shipFactory;
