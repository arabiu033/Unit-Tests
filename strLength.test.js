const strLength = require('./stringLength')

it('Five char', () => {
  expect(strLength('Aminu')).toBe(5);
})

it('One char', () => {
  expect(strLength('A')).toBe(1);
})

it('Four Char', () => {
  expect(strLength('Hope')).toBe(4);
})