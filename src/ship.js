
const shipFactory = (length) => {
    if (typeof length != "number") {
        throw new Error("Number expected as parameter!");
    }
    let hits = 0;
    let sunkStatus = false;

    const addHit = function() {
        hits += 1;
    };
    // adds a hit 
    const getHits = function() {
        return hits;
    };
    const isSunk = function() {
        return hits === length;
    };
    // just reports whether ship is destroyed
    return { addHit, getHits, isSunk }
}

module.exports = shipFactory;
