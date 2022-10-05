const cap = require('./cap');

test('Capitalized', () => {
  expect(cap('aminu')).toBe('Aminu');
})

test('Capitalized', () => {
  expect(cap('aaaa')).toBe('Aaaa');
})