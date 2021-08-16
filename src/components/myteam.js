import React ,{useState} from 'react'
import { connect } from 'react-redux'
import { removePokemon } from '../store'
import { useHistory } from "react-router-dom";

import Card from './Card'

import { 
  Button, 
  ButtonGroup,
  IconButton,
  Text,
  SimpleGrid,
  Box
}
  from "@chakra-ui/react"

import {DeleteIcon,Search2Icon} from '@chakra-ui/icons'

function MyTeam({team,removePokemon}) {
  const history = useHistory();
    const [teamMembers,setTeamMembers]=useState(team)
     const handleRemove=(name)=>{
         removePokemon(name)
         setTeamMembers(teamMembers.filter(member=>member.name!=name))
         console.log(name)
     }
     console.log(teamMembers)
    return teamMembers.length==0?
    (
      <div>
      <Text>There is no team member</Text>
      <ButtonGroup size="sm" isAttached variant="outline" onClick={()=> history.push('/')}>
      <Button mr="-px"  >Search For Pokemons</Button>
      <IconButton aria-label="Add to friends" icon={<Search2Icon />} />
    </ButtonGroup>
      </div>
    ):
    (<div>
    {
    <SimpleGrid columns={{sm: 1, md: 2,lg:3}}  spacing="40px">
          {teamMembers.map(member=>(
              <Box>
                      
                    <div key={member.name}>
                    <Card pokemon={member}></Card>
                      <ButtonGroup size="sm" isAttached variant="outline" onClick={()=>handleRemove(member.name)}>
                                        <Button mr="-px"  >Remove Pokemon</Button>
                                        <IconButton aria-label="Add to friends" icon={<DeleteIcon />} />
                                      </ButtonGroup>
                    </div>
                                  
                    
                  </Box>
    ))}
  
          </SimpleGrid>
           } 
                 </div>
            )
}
const mapStateToProps = state => {
    return {
      team: state.pokemons.pokemons.filter(pokemon=>state.pokemons.team.includes(pokemon.name))
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      removePokemon: (name) => dispatch(removePokemon(name))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MyTeam)
  
  