import logo from "./logo.svg";
import "./App.css";
import PokemonCards from "./components/pokemon-cards";
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Header />
      <PokemonCards />
    </div>
  );
};

export default App;
