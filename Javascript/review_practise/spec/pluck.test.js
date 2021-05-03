const pluck = require('../src/pluck');

describe('pluck', () => {
  test('it takes the value of one property in an object in an array', () => {
    expect(pluck([{a:1}], 'a')).toEqual([1])
  });
  
});