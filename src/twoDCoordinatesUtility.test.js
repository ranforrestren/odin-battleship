import { GRID_SIZE_X, GRID_SIZE_Y, twoDCoordinatesUtility } from './twoDCoordinatesUtility';

test('blank argument fails checkValidPoint', () => {
    expect( () => { twoDCoordinatesUtility.checkValidPoint() }).toThrow(Error);
})

test('non-array argument fails checkValidPoint', () => {
    expect( () => { twoDCoordinatesUtility.checkValidPoint("string") }).toThrow(Error);
})

test('empty array argument fails checkValidPoint', () => {
    expect( () => { twoDCoordinatesUtility.checkValidPoint([]) }).toThrow(Error);
})

test('array w/o length 2 argument fails checkValidPoint', () => {
    expect( () => { twoDCoordinatesUtility.checkValidPoint([1]) }).toThrow(Error);
})

test('array w/ non-string element to fail checkValidPoint', () => {
    expect( () => { twoDCoordinatesUtility.checkValidPoint([1, "string"]) }).toThrow(Error);
})

test('array w/ point greater than grid size X to fail checkValidPoint', () => {
    expect( () => { twoDCoordinatesUtility.checkValidPoint([GRID_SIZE_X, 0]) }).toThrow(Error);
})

test('array w/ point greater than grid size Y to fail checkValidPoint', () => {
    expect( () => { twoDCoordinatesUtility.checkValidPoint([0, GRID_SIZE_Y]) }).toThrow(Error);
})

test('array w/ negative points to fail checkValidPoint', () => {
    expect( () => { twoDCoordinatesUtility.checkValidPoint([-1, -1]) }).toThrow(Error);
})

test('array w/ non-integer values to fail checkValidPoint', () => {
    expect( () => { twoDCoordinatesUtility.checkValidPoint([3.14159, 1.61803]) }).toThrow(Error);
})

test('correct 2D array passes checkValidPoint', () => {
    expect( twoDCoordinatesUtility.checkValidPoint([1, 1]) ).toBe(true);
})