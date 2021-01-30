import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import Pokemon from "./Components/Pokemon";
import PokemonList from "./Components/PokemonList";
import './style.css'

function App() {
  return (
    <div className='main'>
      <img className='logo' src="https://fontmeme.com/permalink/210130/9d6ad5399ee8fb50083faf7094eb8eab.png" alt="fonte-de-pokemon" border="0"/>
      <Switch>
        <Route path={'/'} exact component={PokemonList}/>
        <Route path={'/pokemon/:pokemon'} exact component={Pokemon}/>
        <Redirect to={'/'} />
      </Switch>
    </div>
  );
}

export default App;
