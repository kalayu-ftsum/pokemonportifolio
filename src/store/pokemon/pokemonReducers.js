import {
    FETCH_POKEMONS_REQUEST,
    FETCH_POKEMONS_SUCCESS,
    FETCH_POKEMONS_FAILURE
  } from './pokemonTypes'
  
  const initialState = {
    loading: false,
    pokemons: [],
    error: ''
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POKEMONS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_POKEMONS_SUCCESS:
        return {
          ...state,
          loading: false,
          pokemons: action.payload,
          error: ''
        }
      case FETCH_POKEMONS_FAILURE:
        return {
          ...state,
          loading: false,
          pokemons: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default reducer