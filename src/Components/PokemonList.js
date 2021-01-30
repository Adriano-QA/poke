/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from 'lodash';
import { GetPokemonList } from "../Actions/PokemonActions";
import ErrorConexion from '../Assets/error.png';
import PikachuError from "../Assets/pikachuError.png";

const PokemonList = () => {
    const dispacht = useDispatch();
    const pokemonList = useSelector(state => state.PokemonList);

    useEffect(()=> {
        fecthData(1);
    }, []);


    const fecthData = (page = 1 ) => {
        dispacht(GetPokemonList(page))
    }

    const showData = () => {
        if(!_.isEmpty(pokemonList.data)) {
            return <div className='screenInformation'>
                <img src="https://fontmeme.com/permalink/210130/f221a33ecb4bc25a28cf278f51753784.png" alt="fonte-de-pokemon" border="0"/>
            </div>
        }
        if(pokemonList.loading) {
            return <div className='screenInformation'>
                <img src='https://fontmeme.com/permalink/210130/72be44b74b45e99113b2f860661517c8.png' border="0" alt='Carregando'/>
            </div>
        }
        if(pokemonList.errorMsg !== "") {
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
        <div>{showData()}</div>
    )
};

export default PokemonList;