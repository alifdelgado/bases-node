import { getPokemonById } from '../../src/foundation/promises';

describe('foundation/promises', () => {
  it('getPokemonById should return the name of the pokemon', async () => {
    const pokemonId = 1;
    const pokemonName = await getPokemonById(pokemonId);
    expect(pokemonName).toBe('bulbasaur');
  });

  it('getPokemonById should return an error if the pokemon does not exist', async () => {
    const pokemonId = 1000000;
    try {
      await getPokemonById(pokemonId);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBe('Pokemon does not exists');
    }
  });
});
