const zipWith = require('../src/zipWith')

describe('zipWith', () => {

  const add = function(a,b) {
      return a + b;
    }

  test('takes a function and two arrays as argumnts', () => {
    expect(zipWith(add, [0], [0])).toEqual([0]);
  });

  test('takes a function and two arrays as arguemnts', () => {
    expect(zipWith(add, [1], [0])).toEqual([1]);
  });

});