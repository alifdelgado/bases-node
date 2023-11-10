import { getUserById } from '../../src/foundation/callbacks';
describe('foundation/callbacks.ts', () => {
  test('getUserById should return an error if user does not exists', (done) => {
    const id = 10;
    getUserById(id, (err, user) => {
      expect(err).toBe('User not found');
      expect(user).toBeUndefined();
      done();
    });
  });

  test('getUserById should return the user if it exists', (done) => {
    const id = 1;
    getUserById(id, (err, user) => {
      expect(err).toBeUndefined();
      expect(id).toBe(id);
      expect(user).toMatchObject({
        id: 1,
        name: 'John Doe',
      });
      done();
    });
  });
});
