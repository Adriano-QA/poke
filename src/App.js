import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import Pokemon from "./Components/Pokemon";
import PokemonList from "./Components/PokemonList";
import './style.css'

function App() {
  return (
    <div className='main'>
      <Switch>
        <Route path={'/'} exact component={PokemonList}/>
        <Route path={'/pokemon/:pokemon'} exact component={Pokemon}/>
        <Redirect to={'/'} />
      </Switch>
    </div>
  );
}

export default App;
