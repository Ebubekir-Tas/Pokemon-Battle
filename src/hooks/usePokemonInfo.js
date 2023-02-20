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
    };

    const fetchPokemonData = async () => {
      const responses = await Promise.all(pokemonFetchUrls.map(url => fetch(url)));
      const data = await Promise.all(responses.map(response => response.json()));
      setPokemonInfo(data);
    };

    fetchPokemonData();
  }, [firstNinePokemon]);

  return pokemonInfo;
}

export default usePokemonInfo;
