import logo from "./logo.svg";
import "./App.css";
import usePokemonInfo from "./hooks/usePokemonInfo";
import PokemonCard from "./components/PokemonCard";
import { PokemonFlexContainer } from './components/styles';
function App() {
  const pokemonInfo = usePokemonInfo();
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <PokemonFlexContainer>
        {pokemonInfo.map(
          ({
              sprites: { front_default },
              name,
              types,
              weight,
              abilities
            }) => (
            <PokemonCard
              name={name}
              image={front_default}
              types={types}
              weight={weight}
              randomAbility={abilities[
                Math.floor(Math.random() * abilities.length)
              ].ability.name}
            />
          )
        )}
      </PokemonFlexContainer>
    </div>
  );
}

export default App;
