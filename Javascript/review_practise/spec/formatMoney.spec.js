const formatMoney = require('../src/formatMoney.js');

describe('formatMoney', () => {
  test('it turns takes 2dp number and returns in dollar and cents', () => {
    expect(formatMoney(1.99)).toEqual ('$1.99')
  });

  test('it turns takes 2dp number and returns in dollar and cents', () => {
    expect(formatMoney(12.99)).toEqual ('$12.99')
  });

  test('it turns takes a number with 0dp and adds 00', () => {
    expect(formatMoney(3)).toEqual ('$3.00')
  });

  test('it turns takes a number with 1dp and adds 0', () => {
    expect(formatMoney(3.1)).toEqual ('$3.10')
  });

  test('it turns takes 0 and returns $0.00', () => {
    expect(formatMoney(0)).toEqual ('$0.00')
  });

});