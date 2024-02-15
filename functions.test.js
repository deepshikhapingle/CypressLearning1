const functions = require('./function')

test('Adds 2+2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);


});
// not to be equal

test('Adds 2+2 to not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);


});
// to be null
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();


});
// to be falsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
    // null, 0 , undefined are falsy values


});

// to equal

test('User Should be Brad Tray object', () => {
    expect(functions.createUser()).toEqual({
        firstName: "Brad",
        lastName: "Tray"

    })
})


