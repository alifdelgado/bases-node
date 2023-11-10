import { buildMakePerson } from '../../src/foundation/factory';

describe('foundation/factory', () => {
  const getUUID = () => '1234';
  const getAge = () => 35;
  it('buildMakePerson should return a function', () => {
    const makePerson = buildMakePerson({
      getUUID,
      getAge,
    });
    expect(typeof makePerson).toBe('function');
  });

  it('buildMakePerson should return a person', () => {
    const makePerson = buildMakePerson({
      getUUID,
      getAge,
    });
    const person = makePerson({
      name: 'John Doe',
      birthDate: '1990-01-01',
    });
    expect(person).toMatchObject({
      id: '1234',
      name: 'John Doe',
      birthDate: '1990-01-01',
      age: 35,
    });
  });
});
