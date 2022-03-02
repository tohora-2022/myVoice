import React from 'react'
import { Button, Image, Grid, Flex, Center, VStack, Spacer, HStack, Box } from '@chakra-ui/react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

const Header = () => {
  const { logout, loginWithRedirect } = useAuth0()

  function handleRegister (e) {
    loginWithRedirect({ redirectUri: `${window.location.origin}/` })
  }
  function handleLogIn (e) {
    loginWithRedirect()
  }
  function handleLogOut (e) {
    logout()
  }
  return (
    <>
      <Flex fontFamily='Schoolbell' justifyContent='space-between' align='center' fontSize='2xl' width='100%' height='120px' wrap="wrap" backgroundImage='/images/Bannemonkey.png' pr={1} border='2px' borderColor='green.600'>
        <Box width='266px' />
        <Image
          borderRadius={60}
          boxSize='100px'
          width='110px'
          my={0}
          boxShadow='dark-lg' rounded='md' bg='white'
          src='/images/MyVoiceLogo.png'
          alt='My Voice' />
        <IfAuthenticated>
          <VStack pr={40}>
            <Link to='/'>
              <Button _hover={{ bg: 'blue.600', color: 'white' }} bg='#00C3F7' size='lg' variant='solid' onClick={(e) => handleLogOut()}>Log out</Button>
            </Link>
          </VStack>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <VStack pr={40}>
            <Link to='/'>
              <Button _hover={{ bg: 'blue.600', color: 'white' }} bg='#00C3F7' size='lg' variant='solid' onClick={(e) => handleRegister(e)}>Register</Button>
            </Link>
            <Link to='/'>
              <Button _hover={{ bg: 'blue.600', color: 'white' }} bg='#00C3F7' size='lg' variant='solid' onClick={(e) => handleLogIn(e)}>Log in</Button>
            </Link>
          </VStack>
        </IfNotAuthenticated>
      </Flex></>
  )
}

export default Header
