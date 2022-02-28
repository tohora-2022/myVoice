import React from "react";
import {
  Image,
  Box,
} from "@chakra-ui/react";

const Header = () => {
 
  return (
    <Box
      as="nav"
      width='100%'
      height='120px'
      padding={2}
      align="center"
      wrap="wrap"
      color="white"
      backgroundImage='/images/Bannemonkey.png' width='100%' pr={1}
    >
  
      <Box align="center">

      <Image
      borderRadius={60}
       boxSize='100px'
       width='110px'
       boxShadow='dark-lg' rounded='md' bg='white'align="center"
  src='/images/MyVoiceLogo.png'
  alt='My Voice'
/>
      </Box>    
    </Box>
  );
};

export default Header;
