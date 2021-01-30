import axios from 'axios';

export const GetPokemonList = (page) => async dispacht => {
    try {
        dispacht({
            type:'POKEMON_LIST_LOADING'
        });

        const perPage = 15;
        const offSet = (page * perPage) - perPage;

        //Carrega 15 pokemons por pagina
        //Página => 1 = 0 1 * 15 - 15 = 0

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offSet}`)

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