import twoDCoordinatesUtility from './twoDCoordinatesUtility';

test('expect checkCollisionPoints() to be true on collision', () => {
    expect( twoDCoordinatesUtility.checkCollisionPoints([2,3], [2,3]) ).toBe(true);
})

test('expect checkCollisionPoints() to be false on no collision', () => {
    expect( twoDCoordinatesUtility.checkCollisionPoints([2,3], [3,3]) ).toBe(false);
})

test('expect checkCollisionLines() to be true on collision', () => {
    expect( twoDCoordinatesUtility.checkCollisionLines([2,3], [[0,3],[1,3],[2,3]]) ).toBe(true);
})

test('expect checkCollisionLines() to be false on no collision', () => {
    expect( twoDCoordinatesUtility.checkCollisionLines([2,3], [[0,1],[0,2],[0,3]]) ).toBe(false);
})