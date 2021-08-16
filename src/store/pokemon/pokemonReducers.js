import {
    FETCH_POKEMONS_REQUEST,
    FETCH_POKEMONS_SUCCESS,
    FETCH_POKEMONS_FAILURE
  } from './pokemonTypes'
  
  const initialState = {
    loading: false,
    pokemons: [],
    error: '',
    team:[]
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
      case "ADD_POKEMON":
            return {
              ...state,
              team:[...state.team,action.name]
            }
       case "REMOVE_POKEMON":
            return {
              ...state,
              team:state.team.filter(pokemon=>pokemon!=action.name)
            }
      default: return state
    }
  }
  
  export default reducer