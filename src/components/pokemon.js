import React ,{useEffect,useState}from 'react'
import {useParams} from 'react-router-dom'
import Pokemon from '../services/pokemonService'
import { useHistory } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button, 
  ButtonGroup,
  IconButton,
  SimpleGrid,
  FormControl,
  FormLabel,
  Box,
  Image,
  useDisclosure,
  Text,
  Stack}
  from "@chakra-ui/react"
import { AddIcon,DeleteIcon} from '@chakra-ui/icons'

import { connect } from 'react-redux'
import { addPokemon,removePokemon } from '../store'

function PokemonDetail({team,addPokemon,removePokemon}) {
    const {pokemonName}=useParams()
    const [pokemon, setPokemon] = useState([])
    const history = useHistory();
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef()
    const finalRef = React.useRef()

    const isItReachedMax=team.length==6
    useEffect(()=>{
        FetchData()
    },[])

    const FetchData=async()=>{
        const data= await Pokemon.getPokemon(pokemonName)
        setPokemon(data)
    }
    const { id, name, height, weight, base_experience } = pokemon;
    const handleAdd=()=>{
      console.log(isItReachedMax)
      if(isItReachedMax){
        onOpen()
      }else{
        addPokemon(pokemonName)
        history.push('/myteam')
      }
    }
    const handleRemove=()=>{
        removePokemon(pokemonName)
    }
    const isMember=team.includes(pokemonName)

    return (
        <div>
        <div className='pokeCard__header'>
        <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>You've reached your maximum limit.</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Remove some pokemon from your team.</FormLabel>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}  mr={3}>
              Cancel
            </Button>
            <Button onClick={()=>history.push('/myteam')}>Go To Your Team</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


<Box
            p={4}
            display={{ md: "flex" }}
            margin={2}
            >
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

        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="lg"
          letterSpacing="wide"
          color="teal.600"
        >
         {pokemonName}
        </Text>
        <Image
          margin="auto"
          boxSize="200px"
          objectFit="cover"
          alt="pokemon"
          src={`https://img.pokemondb.net/artwork/large/${pokemonName}.jpg`}
        />
      </Stack>
    </Box>
    <Stack
                  align={{ base: "center", md: "stretch" }}
                  textAlign={{ base: "center", md: "left" }}
                  mt={{ base: 4, md: 0 }}
                  ml={{ md: 6 }}
                  direction="row"
                >
             <Box
            p={4}
            maxWidth="32rem"
            margin={2}
            >
             <Text fontSize="2xl">Description</Text>
        <Text
                  fontWeight="bold"
                  fontSize="lg"
                  letterSpacing="wide"
                  color="teal.600"
                >
            
          <Text>NO. {id}</Text>
          <Text>Height: {height}</Text>
          <Text>Weight: {weight}</Text>
          <Text>Base XP:{base_experience}</Text>
          </Text>
     </Box>

     <Box
            p={4}
            maxWidth="32rem"
            margin={2}
            >
          <Text fontSize="2xl">Stats</Text>
            {pokemon.stats &&
              pokemon.stats.map((stat, index) => {
                return (
                  <Text
                  fontWeight="bold"
                  fontSize="lg"
                  letterSpacing="wide"
                  color="teal.600"
                  key={index}
                >
                 {stat['stat']['name']}:
                 <span className='pokeCard__item'>
                   <strong>{stat.base_stat}</strong>
                 </span>
                </Text>
                );
              })}
          </Box>


          <Box
            p={4}
            maxWidth="32rem"
            margin={2}
            >
          <Text fontSize="2xl">Abilities</Text>
          {pokemon.abilities &&
            pokemon.abilities.map((ability, index) => {
              return (
                <Text
                fontWeight="bold"
                fontSize="lg"
                letterSpacing="wide"
                color="teal.600"
              >
                  {ability['ability']['name']}
            </Text>
              );
            })}
     </Box>
     <Box
            p={4}
           
            maxWidth="32rem"
            margin={2}
            >
       <Text fontSize="2xl">Types</Text>
          {pokemon.types &&
            pokemon.types.map((type, index) => {
              return (
                <Text
                fontWeight="bold"
                fontSize="lg"
                letterSpacing="wide"
                color="teal.600"
              >
                  {type['type']['name']}
               </Text>
              );
            })}
</Box>
                      </Stack>
        
            </Box>

            {
             isMember?(
                 <div>
                   <ButtonGroup size="sm" isAttached variant="outline" onClick={handleRemove}>
                      <Button mr="-px"  >Remove Pokemon</Button>
                      <IconButton aria-label="Add to friends" icon={<DeleteIcon />} />
                    </ButtonGroup>
                 </div>
                     ):
                     (
                      <ButtonGroup size="sm" isAttached variant="outline" onClick={handleAdd}>
                      <Button mr="-px"  >Add Pokemon</Button>
                      <IconButton aria-label="Add to friends" icon={<AddIcon />} />
                    </ButtonGroup>
                     )
                
            }
                      </div>
                            </div>
    )
}


const mapStateToProps = state => {
    return {
      team: state.pokemons.team
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      addPokemon: (name) => dispatch(addPokemon(name)),
      removePokemon: (name) => dispatch(removePokemon(name))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PokemonDetail)
  