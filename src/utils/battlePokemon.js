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

export function battlePokemon(pokemon1, pokemon2) {
  const pokemon1Type = pokemon1.type;
  const pokemon2Type = pokemon2.type;
  
  // Check if one Pokemon's type is weak against the other's
  if (typeMatchups[pokemon1Type] === pokemon2Type) {
    return pokemon1.name;
  } else if (typeMatchups[pokemon2Type] === pokemon1Type) {
    return pokemon2.name;
  }

  // If both Pokemon have the same type, prioritize evolution order
  if (pokemon1Type === pokemon2Type) {
    const pokemon1EvolutionIndex = evolutionOrder[pokemon1Type].indexOf(pokemon1.name.toLowerCase());
    const pokemon2EvolutionIndex = evolutionOrder[pokemon2Type].indexOf(pokemon2.name.toLowerCase());
    
    if (pokemon1EvolutionIndex > pokemon2EvolutionIndex) {
      return pokemon1.name;
    } else if (pokemon2EvolutionIndex > pokemon1EvolutionIndex) {
      return pokemon2.name;
    }
  }

  // It will never get to here as it is written now.
  return 'error';
}