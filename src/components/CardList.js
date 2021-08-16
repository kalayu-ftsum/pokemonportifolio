import React from 'react';
import { SimpleGrid,Box } from "@chakra-ui/react"

import Card  from './Card.js';


export const CardList = props => (
    <div className='card-list'>
        <SimpleGrid columns={{sm: 1, md: 2,lg:3}}  spacing="40px">
        {props.pokemons.map(pokemon =>(
            <Box>
                    <Card key={pokemon.name} pokemon={pokemon}></Card>
                </Box>
  ))}

        </SimpleGrid>

    </div>
);