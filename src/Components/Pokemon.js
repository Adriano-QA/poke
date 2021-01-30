/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../Actions/PokemonActions";
import _ from "lodash";
import ErrorConexion from '../Assets/error.png';
import PikachuError from "../Assets/pikachuError.png";


const Pokemon = (props) => {
    const pokemonName = props.match.params.pokemon;
    const dispatch = useDispatch()
    const pokemonState = useSelector(state => state.Pokemon)

    useEffect(() => {
        dispatch(GetPokemon(pokemonName))
    }, [])


    const showData = () => {
        if(!_.isEmpty(pokemonState.data[pokemonName])) {
            const pokeData = pokemonState.data[pokemonName]
            return (
                <div className='pokemon'>
                    <div className='item-images'>
                        <h1>Sprites</h1>
                         <img src={pokeData.sprites.front_default} alt=''/>
                         <img src={pokeData.sprites.front_shiny} alt=''/>
                    </div>
                    <div className='item-stats'>
                        <h1>Stats</h1>
                        {pokeData.stats.map(e => {
                            return <p>{e.stat.name} {e.base_stat} </p>
                        })}
                    </div>
                    <div className='item-abilities'>
                        <h1>Abilities</h1>
                        {pokeData.abilities.map(e => {
                            return <p>{e.ability.name}</p>
                        })}
                    </div>
                </div>
            )
            
        }
        if(pokemonState.loading) {
            return <div className='screenInformation'>
                <img src='https://fontmeme.com/permalink/210130/72be44b74b45e99113b2f860661517c8.png' border="0" alt='Carregando'/>
            </div>
        }
        if(pokemonState.errorMsg !== "") {
            return <div className='screenInformation'>
            <img src={ErrorConexion} alt="falha de conexão" border="0"/>
            <img className='imgError' src={PikachuError} alt="falha de conexão" border="0"/>
        </div>    
        }

        return <div className='screenInformation'>
                <img src={ErrorConexion} alt="falha de conexão" border="0"/>
                <img className='imgError' src={PikachuError} alt="falha de conexão" border="0"/>
            </div>        
    }

    return (
        <div className='pokemon-details'>
        <h1>{pokemonName}</h1>
        {showData()}

    </div>

    )
};


export default Pokemon;