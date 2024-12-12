interface Pokemon {
    id: number;
    name: string;
    types: string[];
    sprite: string;
  }

export const fetchPokemonList = async (limit: number, offset: number): Promise<{pokemonList: Pokemon[], count: number}> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();

    const pokemonPromises = data.results.map(async (pokemon: { name: string; url: string }) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();
        return {
            id: pokemonData.id,
            name: pokemonData.name,
            types: pokemonData.types.map((type: { type: { name: string } }) => type.type.name),
            sprite: pokemonData.sprites.front_default,
        };
    });
    const pokemonList = await Promise.all(pokemonPromises);

    return {pokemonList, count: data.count};
};