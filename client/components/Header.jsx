import React from 'react'
import { Button, Image, Box } from '@chakra-ui/react'
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
    <Box
      as="nav"
      width='100%'
      height='120px'
      padding={2}
      align="center"
      wrap="wrap"
      color="white"
      backgroundImage='/images/Bannemonkey.png' pr={1}
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
      <IfAuthenticated>
        <Link to='/'>
          <Button _hover={{ bg: 'blue.600' }} mt='50px' mb='40px' bg='#00C3F7'size='lg' variant='solid' onClick={(e) => handleLogOut()}>Log out</Button>
        </Link>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <Link to='/'>
          <Button _hover={{ bg: 'blue.600' }} mt='50px' mb='40px' bg='#00C3F7'size='lg' variant='solid' onClick={(e) => handleRegister(e)}>Register</Button>
        </Link >
        <Link to='/'>
          <Button _hover={{ bg: 'blue.600' }} mt='50px' mb='40px' bg='#00C3F7'size='lg' variant='solid' onClick={(e) => handleLogIn(e)}>Log in</Button>
        </Link>
      </IfNotAuthenticated>
    </Box>
  )
}

export default Header
