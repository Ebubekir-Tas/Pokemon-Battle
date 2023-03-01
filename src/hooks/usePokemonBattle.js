/* 
  Note: Going to assume battles between pokemon 1-9 for simplicity.
    Evolution chains can be found with this API url: https://pokeapi.co/api/v2/evolution-chain/1/
    but we will just hardcode evolution chain for simplicity and timesaving.
*/

import { useRecoilState } from 'recoil';
import { pokemonBattleWinnerState } from '../recoil/atoms';

const typeMatchups = {
  fire: "grass",
  water: "fire",
  grass: "water",
};

const evolutionOrder = {
  fire: ["charmander", "charmeleon", "charizard"],
  water: ["squirtle", "wartortle", "blastoise"],
  grass: ["bulbasaur", "ivysaur", "venusaur"],
};

function usePokemonBattle() {
  const [winner, setWinner] = useRecoilState(pokemonBattleWinnerState);

  function determineWinner(pokemon) {
    const pokemon1Type = pokemon[0].type;
    const pokemon2Type = pokemon[1].type;

    // Check if one Pokemon's type is weak against the other's
    if (typeMatchups[pokemon1Type] === pokemon2Type) {
      setWinner(pokemon[0].name);
    } else if (typeMatchups[pokemon2Type] === pokemon1Type) {
      setWinner(pokemon[1].name);
    };

    // If both Pokemon have the same type, prioritize evolution order
    if (pokemon1Type === pokemon2Type) {
      const pokemon1EvolutionIndex = evolutionOrder[pokemon1Type].indexOf(pokemon[0].name.toLowerCase());
      const pokemon2EvolutionIndex = evolutionOrder[pokemon2Type].indexOf(pokemon[1].name.toLowerCase());

      if (pokemon1EvolutionIndex > pokemon2EvolutionIndex) {
        setWinner(pokemon[0].name);
      } else if (pokemon2EvolutionIndex > pokemon1EvolutionIndex) {
        setWinner(pokemon[1].name);
      };
    };
  };

  return [winner, determineWinner];
};

export default usePokemonBattle;