const pluck = require('../src/pluck');

describe('pluck', () => {
  test('it takes the value of one property in an object in an array', () => {
    expect(pluck([{a:1}], 'a')).toEqual([1])
  });

  test('it takes the different value of one property in an object in an array', () => {
    expect(pluck([{a:2}], 'a')).toEqual([2])
  });

   test('it takes the value of a different property in an object in an array', () => {
    expect(pluck([{b:2}], 'b')).toEqual([2])
  });

  test('it gives underfined if a property does not exist', () => {
    expect(pluck([{b:2}], 'a')).toEqual([undefined]);
  });

  test('it can count two objects in the array', () => {
    expect(pluck([{a:2}, {a:3}], 'a')).toEqual([2,3]);
  });
  
});