import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Image,
    Text,
    Stack
  } from "@chakra-ui/react";

 function Card(props){
return(
    <div className="card-continer">
        <Link to={`/pokemon/${props.pokemon.name}`}>
        <Box
            p={4}
            display={{ md: "flex" }}
            maxWidth="32rem"
            borderWidth={1}
            margin={2}
            >
                <Stack
                  align={{ base: "center", md: "stretch" }}
                  textAlign={{ base: "center", md: "left" }}
                  mt={{ base: 4, md: 0 }}
                  ml={{ md: 6 }}
                >

        <Image
          margin="auto"
          boxSize="200px"
          objectFit="cover"
          alt="pokemon"  
          src={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`}
        />
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="lg"
          letterSpacing="wide"
          color="teal.600"
        >
         {props.pokemon.name[0].toUpperCase()+props.pokemon.name.slice(1)}
        </Text>
        
      </Stack>
    </Box>
        </Link>
    </div>
);
}

export default  Card