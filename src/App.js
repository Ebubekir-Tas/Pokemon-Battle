import React from 'react';
import logo from "./logo.svg";
import "./App.css";
import PokemonCards from "./components/pokemon-cards";
import Header from './components/header';
import BattleModal from './components/battle-modal';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Header />
      <PokemonCards />
      <BattleModal />
    </div>
  );
};

export default App;
