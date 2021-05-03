const zipWith = require('../src/zipWith')

describe('zipWith', () => {
  test('takes a function and two arrays as arguemnts', () => {
    const add = function(a,b) {
      return a + b;
    }
    expect(zipWith(add, [0], [0])).toEqual([0]);
  });
});