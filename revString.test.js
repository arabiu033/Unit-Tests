const rev = require('./revString');

it('reverse a string',() => {
  expect(rev('Aminu')).toBe('unimA');
})

it('reverse a string',() => {
  expect(rev('A')).toBe('A');
})
