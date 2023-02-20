import logo from "./logo.svg";
import "./App.css";
import PokemonCards from "./components/pokemon-cards";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <PokemonCards />
    </div>
  );
}

export default App;
