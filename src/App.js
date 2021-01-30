import React from "react";
import {Switch, Route, NavLink, Redirect} from 'react-router-dom';
import Pokemon from "./Components/Pokemon";
import PokemonList from "./Components/PokemonList";
import './style.css'
import Search from './Assets/search.png';

function App() {
  return (
    <div className='main'>
      <nav>
        <NavLink to={'/pokemon/'}> <img className='search' src={Search} alt="pesquisar" border="0"/></NavLink>
      </nav>
      <Switch>
        <Route path={'/'} exact component={PokemonList}/>
        <Route path={'/pokemon/:pokemon'} exact component={Pokemon}/>
        <Redirect to={'/'} />
      </Switch>
    </div>
  );
}

export default App;
