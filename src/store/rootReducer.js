import { combineReducers } from 'redux'
import pokemonReducers from './pokemon/pokemonReducers'
const rootReducer = combineReducers({
  pokemons:pokemonReducers
})

export default rootReducer
