import React from 'react'
import { NavLink } from 'react-router-dom';
import {
  Box,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';


export default function Navbar() {
    return (
        <>
          <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
              <Flex alignItems={'center'}>
               <NavLink to="/" >Home</NavLink>
              </Flex>
              <Flex alignItems={'center'}>
               <NavLink to="/myteam" >My Team</NavLink>
              </Flex>
            </Flex>
              </Box>
        </>
      );
}
