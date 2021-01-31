import axios from 'axios';

export const GetPokemonList = (page) => async dispacht => {
    try {
        dispacht({
            type:'POKEMON_LIST_LOADING'
        });

            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10000&offset=20`)

        dispacht({
            type:'POKEMON_LIST_SUCCESS',
            payload: res.data
        })
    } catch (e) {   
        dispacht({
            type:'POKEMON_LIST_ERROR'
        })

    }
};

export const GetPokemon = (pokemon) => async dispacht => {
    try {
        dispacht({
            type:'POKEMON_MULTIPLE_LOADING'
        });

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

        dispacht({
            type:'POKEMON_MULTIPLE_SUCCESS',
            payload: res.data,
            pokemonName: pokemon
        })
    } catch (e) {   
        dispacht({
            type:'POKEMON_MULTIPLE_ERROR'
        })

    }
};