const shipFactory = require('./ship');

test('constructs ship object correctly', () => {
    expect( () => { const ship = shipFactory(3) }).not.toThrow(Error);
})

test('fails to construct ship (no argument)', () => {
    expect( () => { const ship = shipFactory() }).toThrow(Error);
})

test('expect getHit() to return 0 on new ship', () => {
    const ship = shipFactory(3);
    expect( () => {
        ship.getHits();
    }).toBe(0);
})

test('expect addHit() to add a hit on a ship', () => {
    const ship = shipFactory(3);
    ship.addHit();
    expect( () => {
        ship.getHits();
    }).toBe(1);
})

test('expect isSunk() to be true on 3 hits / 3 length', () => {
    const ship = shipFactory(3);
    ship.addHit();
    ship.addHit();
    ship.addHit();
    expect( () => {
        ship.getHits();
    }).toBe(3);
    expect( () => {
        ship.isSunk();
    }).toBe(true);
})