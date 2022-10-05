const calc = require('./simpleCalc');

describe('Addition', () => {
  test('First', () => {
    expect(calc.add(5, 6)).toBe(11);
  })
  test('Second', () => {
    expect(calc.add(54, 23)).toBe(77);
  })
  test('Third', () => {
    expect(calc.add(0, 0)).toBe(0);
  })
})

describe('Subtraction', () => {
  test('First', () => {
    expect(calc.sub(5, 6)).toBe(-1);
  })
  test('Second', () => {
    expect(calc.sub(54, 23)).toBe(31);
  })
  test('Third', () => {
    expect(calc.sub(0, 0)).toBe(0);
  })
})

describe('Division', () => {
  test('First', () => {
    expect(calc.div(12, 6)).toBe(2);
  })
  test('Second', () => {
    expect(calc.div(100, 5)).toBe(20);
  })
  test('Third', () => {
    expect(calc.div(0, 0)).toBe(NaN);
  })
})

describe('Multiplication', () => {
  test('First', () => {
    expect(calc.mul(5, 6)).toBe(30);
  })
  test('Second', () => {
    expect(calc.mul(2, 23)).toBe(46);
  })
  test('Third', () => {
    expect(calc.mul(0, 0)).toBe(0);
  })
})