import React, { useState } from 'react';
import logo from "./logo.svg";
import "./App.css";
import PokemonCards from "./components/pokemon-cards";
import Header from './components/header';
import BattleModal from './components/battle-modal';

function App() {
  const [pokemonFilter, setPokemonFilter] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Header
        pokemonFilter={pokemonFilter}
        setPokemonFilter={setPokemonFilter}
        selectedPokemon={selectedPokemon}
      />
      <PokemonCards
        pokemonFilter={pokemonFilter}
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
    </div>
  );
};

export default App;
