import shipFactory from './ship';

test('constructs ship object correctly', () => {
    expect( () => { const ship = shipFactory('Destroyer', 3, [[0,0],[1,0],[2,0]]) }).not.toThrow(Error);
})

test('fails to construct ship (no arguments)', () => {
    expect( () => { const ship = shipFactory() }).toThrow(Error);
})

test('fails to construct ship (missing arguments)', () => {
    expect( () => { const ship = shipFactory('name')}).toThrow(Error);
})

test('fails to construct ship (name must be a string)', () => {
    expect( () => { const ship = shipFactory(0, 3, [[0,0],[1,0],[2,0]]) }).toThrow(Error);
})

test('fails to construct ship (length must be a number)', () => {
    expect( () => { const ship = shipFactory('Destroyer', 'string', [[0,0],[1,0],[2,0]]) }).toThrow(Error);
})

test('fails to construct ship (length cannot be 0)', () => {
    expect( () => { const ship = shipFactory('Destroyer', 0, [[0,0],[1,0],[2,0]]) }).toThrow(Error);
})

test('expect to be unable to access properties of object)', () => {
    const ship = shipFactory('Destroyer', 3, [[0,0],[1,0],[2,0]])
    expect( ship.hits ).toBe(undefined);
})

test('expect getHit() to return 0 on new ship', () => {
    const ship = shipFactory('Destroyer', 3, [[0,0],[1,0],[2,0]]);
    expect( ship.getHits() ).toBe(0);
})

test('expect isHit() to add a valid hit on a ship', () => {
    const ship = shipFactory('Destroyer', 3, [[0,0],[1,0],[2,0]])
    ship.isHit([0,0]);
    expect( ship.getHits() ).toBe(1);
})

test('expect isHit() to not add an invalid hit on a ship', () => {
    const ship = shipFactory('Destroyer', 3, [[0,0],[1,0],[2,0]])
    ship.isHit([0,1]);
    expect( ship.getHits() ).toBe(0);
})

test('expect isSunk() to be true on 3 hits / 3 length', () => {
    const ship = shipFactory('Destroyer', 3, [[0,0],[1,0],[2,0]])
    ship.isHit([0,0]);
    ship.isHit([1,0]);
    ship.isHit([2,0]);
    expect( ship.getHits() ).toBe(3);
    expect( ship.isSunk() ).toBe(true);
})

test('expect isSunk() to be false on 2 hits / 3 length', () => {
    const ship = shipFactory('Destroyer', 3, [[0,0],[1,0],[2,0]])
    ship.isHit([0,0]);
    ship.isHit([1,0]);
    expect( ship.getHits() ).toBe(2);
    expect( ship.isSunk() ).toBe(false);
})