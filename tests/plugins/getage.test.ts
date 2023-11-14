import { getAge } from '../../src/plugins/getage.plugin';

describe('plugins/getage.plugin.ts', () => {
  it('the age returned should be a number', () => {
    const birthDate = '1990-01-01';
    const age = getAge(birthDate);
    expect(typeof age).toBe('number');
  });

  it('should return the age of the user', () => {
    const birthDate = '1990-01-01';
    const age = getAge(birthDate);
    expect(age).toBe(34);
  });

  it('should return 0 years', () => {
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
    const birthDate = '1990-01-01';
    const age = getAge(birthDate);
    expect(age).toBe(0);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
