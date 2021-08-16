import axios from 'axios'


import {
    FETCH_POKEMONS_REQUEST,
    FETCH_POKEMONS_SUCCESS,
    FETCH_POKEMONS_FAILURE
  } from './pokemonTypes'
  

export const fetchPokemons = () => {
  return (dispatch) => {
    dispatch(fetchPokemonsRequest())
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(response => {
        // response.data is the pokemons
        const pokemons = response.data.results
        dispatch(fetchPokemonsSuccess(pokemons))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchPokemonsFailure(error.message))
      })
  }
}




export const fetchPokemonsRequest = () => {
  return {
    type: FETCH_POKEMONS_REQUEST
  }
}

export const fetchPokemonsSuccess = pokemons => {
  return {
    type: FETCH_POKEMONS_SUCCESS,
    payload: pokemons
  }
}

export const fetchPokemonsFailure = error => {
  return {
    type: FETCH_POKEMONS_FAILURE,
    payload: error
  }
}



export const addPokemon = (name) => {
    return {
        type:"ADD_POKEMON",
        name
    }
  }
  
export const removePokemon = (name) => {
    return {
        type:"REMOVE_POKEMON",
        name
    }
  }
  
