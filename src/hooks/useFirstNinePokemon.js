import { useEffect, useState } from 'react';

const useFirstNinePokemon = () => {
  const [firstNinePokemon, setFirstNinePokemon] = useState([]);
  useEffect(() => {
    const fetchNinePokemon = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0');
      const data = await response.json();
      setFirstNinePokemon(data);
    };

    fetchNinePokemon();
  }, []);

  return firstNinePokemon;
}

export default useFirstNinePokemon;
