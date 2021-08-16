import { useState,useEffect } from "react"


import { CardList } from './CardList';
import { SearchBox } from './SearchBox';
import { connect } from 'react-redux'
import { fetchPokemons } from '../store'
import {Box, Center, VStack} from '@chakra-ui/react'

function Home(props){
    const [search,setSearch]=useState('')
    useEffect(() => {
        props.fetchPokemons()
       }, [])
    const pokemons =props.pokemonsData.pokemons
    const  handleChange=(e) => {
           setSearch( e.target.value);
         };
         
    const fileteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));
    return  props.pokemonsData.loading ? (
      <h2>Loading</h2>
    ) : props.pokemonsData.error ? (
      <h2>{props.pokemonsData.error}</h2>
    ) :
    (


      <div className="App">
<Center my={2}>
        <SearchBox
          placeholder='Search Pokemon' 
          handleChange= {handleChange}
        />
</Center>

      
        <CardList pokemons={fileteredPokemons}></CardList>

    
      </div>
    );
}

const mapStateToProps = state => {
  return {
    pokemonsData: state.pokemons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPokemons: () => dispatch(fetchPokemons())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)


