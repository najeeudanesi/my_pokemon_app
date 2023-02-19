import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AppNavigator from './components/AppNavigator';
import Pokedex from './containers/Pokedex';
import PokemonDetails from './containers/PokemonDetails';

function App() {


  return (
    
    <Router>
      <AppNavigator/>
      <Routes>
        <Route exact path="/" element= {<Pokedex/>} />
        <Route exact path="/pokemon/:name" element= {<PokemonDetails/>} />
      </Routes>
      
    </Router>

  )
}

export default App;
