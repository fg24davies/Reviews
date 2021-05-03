const pluck = require('../src/pluck');

describe('pluck', () => {
  test.skip('it takes the value of one property in an object in an array', () => {
    expect(pluck([{a:1}], 'a')).toEqual([1])
  });

  test.skip('it takes the different value of one property in an object in an array', () => {
    expect(pluck([{a:2}], 'a')).toEqual([2])
  });

   test.skip('it takes the value of a different property in an object in an array', () => {
    expect(pluck([{b:2}], 'b')).toEqual([2])
  });

  test.skip('it gives underfined if a property does not exist', () => {
    expect(pluck([{b:2}], 'a')).toEqual([undefined]);
  });

  test.skip('it can count two objects in the array', () => {
    expect(pluck([{a:2}, {a:3}], 'a')).toEqual([2,3]);
  });
  
  test.skip('it ignores property in oject if not named', () => {
    expect(pluck( [{a:1, b:3}], 'b')).toEqual([3]);
  });

  test.skip('it can count two objects in the array', () => {
    expect(pluck([{a:1, b:3}, {a:2}], 'a')).toEqual([1,2]);
  });
 
  test.skip('it gives underfined when two objects in the array', () => {
    expect(pluck([{a:1, b:3}, {a:2}], 'b' )).toEqual([3, undefined]);
  });
  
});