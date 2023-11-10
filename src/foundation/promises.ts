export const getPokemonById = async (id: string | number): Promise<string> => {
  try {
    const { name } = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)).json();
    return name;
  } catch (error) {
    throw 'Pokemon does not exists';
  }
};
