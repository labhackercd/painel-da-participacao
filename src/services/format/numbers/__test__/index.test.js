import { pad } from '../index';

describe('Test pad function', () => {
  test('Pad function should return string 01', () => {
    expect(pad(1)).toBe('01');
  });

  test('Pad function should not return string 1', () => {
    expect(pad(1)).not.toBe('1');
  });
});
