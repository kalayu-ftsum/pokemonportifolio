import http from "./httpService";

const apiEndpoint = "https://pokeapi.co/api/v2/pokemon"


export async function getPokemon(pokemonName) {
    const { data } = await http.get(apiEndpoint+"/"+pokemonName);
    return data
  }

export default {
    getPokemon
};
