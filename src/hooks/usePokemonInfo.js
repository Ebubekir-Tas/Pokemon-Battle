import { useEffect, useState } from 'react';
import useFirstNinePokemon from './useFirstNinePokemon';

const usePokemonInfo = () => {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const firstNinePokemon = useFirstNinePokemon();

  useEffect(() => {
    const pokemonFetchUrls = [];

    if (firstNinePokemon.length !== 0) {
      firstNinePokemon.results.forEach(({ url }) => {
        pokemonFetchUrls.push(url);
      });
    }

    const fetchPokemonData = async () => {
      try {
        const responses = await Promise.all(
          pokemonFetchUrls.map((url) => fetch(url))
        );
        const data = await Promise.all(
          responses.map(async (response) => {
            const { name, abilities, sprites, types, weight } = await response.json();
            return {
              name,
              abilities,
              image: sprites.front_default,
              types,
              weight,
            };
          })
        );
        setPokemonInfo(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonData();
  }, [firstNinePokemon]);

  return pokemonInfo;
};

export default usePokemonInfo;
