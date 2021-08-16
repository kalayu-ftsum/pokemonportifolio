import React from 'react';
// import './search-box.styles.css';
import { InputGroup,InputLeftElement,Input ,Center} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

export const SearchBox = ({placeholder, handleChange}) =>(
<Center 
>
    <InputGroup

    >
    <InputLeftElement
      pointerEvents="none"
      children={<Search2Icon color="gray.300" />}
    />
    <Input 
            type='search' 
            placeholder={placeholder} 
            onChange={handleChange}
            maxWidth="100%"
     />
  </InputGroup>

</Center>
);