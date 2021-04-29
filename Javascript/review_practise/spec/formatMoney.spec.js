const formatMoney = require('../src/formatMoney.js');

describe('formatMoney', () => {
  test('it turns takes 2dp number and returns in dollar and cents', () => {
    expect(formatMoney(1.99)).toEqual ('$1.99')
  });

  test('it turns takes 2dp number and returns in dollar and cents', () => {
    expect(formatMoney(12.99)).toEqual ('$12.99')
  });

});