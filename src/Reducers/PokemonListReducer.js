const InitialState = {
    loading: false,
    data:[],
    errorMsg:""
};

const PokemonListReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "POKEMON_LIST_LOADING":
            return {
                ...state,
                loading:true,
                errorMsg:""
            };
        case "POKEMON_LIST_SUCCESS":
            return {
                ...state,
                loading:false,
                data: action.payload,
                errorMsg:""
            }; 
        case "POKEMON_LIST_ERROR":
            return {
                ...state,
                loading:false,
                errorMsg:"Falha na conexão, verifique sua conexão"
            };     
        default:
           return state
    }
}

export default PokemonListReducer;
