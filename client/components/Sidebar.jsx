import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeZoom } from '../actions'
import { Button, Box, Center, Flex, VStack } from '@chakra-ui/react'
import { IoHomeOutline, IoWarningOutline, IoCloseCircleOutline, IoCheckmarkCircleOutline, IoFlashOutline, IoHeartOutline } from 'react-icons/io5'
import { AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai'
import { useAuth0 } from '@auth0/auth0-react'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

export default function Sidebar () {
  const currentZoom = useSelector(state => state.zoom)
  const possibleZoom = ['small', 'medium', 'large']
  const dispatch = useDispatch()
  const speakHandler = (word) => {
    const utterance = new SpeechSynthesisUtterance(word)
    speechSynthesis.speak(utterance)
  }
  const audio = new Audio('/Airplane-ding-sound.mp3')

  const start = () => {
    audio.play()
  }

  function handleZoom (change) {
    console.log('change')
    const zoomIndex = possibleZoom.indexOf(currentZoom)
    if (change === 'in' && zoomIndex !== possibleZoom.length - 1) {
      return dispatch(changeZoom(possibleZoom[zoomIndex + 1]))
    }
    if (change === 'out' && zoomIndex !== 0) {
      return dispatch(changeZoom(possibleZoom[zoomIndex - 1]))
    }
  }

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
      <Flex >
        <Box width={200} bg='#21ad09' maxW='xs' align='right' h='100%' borderRadius='md' mr={10} border='2px' borderColor='green.600'>
          <VStack outline='orange.100' direction='row' align='center'>
            <Link to='/'>
              <Center ><Button _hover={{ bg: 'blue.600' }} mt='40px' bg='#00C3F7' size='lg' variant='solid' textStyle='Concert+One' color='white' >Home <IoHomeOutline /></Button></Center>
            </Link>
            <Center ><Button _hover={{ bg: 'blue.600' }} mt='50px' bg='#00C3F7' size='lg' variant='solid' onClick={() => speakHandler('Favourites')}>Favourites <IoHeartOutline /></Button></Center>
            <Center ><Button _hover={{ bg: 'blue.600' }} mt='50px' bg='#00C3F7' size='lg' variant='solid' onClick={() => speakHandler('Yes')}>Yes <IoCheckmarkCircleOutline /></Button></Center>
            <Center ><Button _hover={{ bg: 'blue.600' }} mt='50px' bg='#00C3F7' size='lg' variant='solid' onClick={() => speakHandler('No')}>No  <IoCloseCircleOutline /></Button></Center>
            <Center ><Button _hover={{ bg: 'blue.600' }} mt='50px' bg='#00C3F7' size='lg' variant='solid' onClick={() => speakHandler('Sorry I made a mistake, give me a moment.')}>Mistake<IoFlashOutline /></Button></Center>
            <Center ><Button _hover={{ bg: 'blue.600' }} mt='50px' bg='#00C3F7' size='lg'variant='solid' onClick={start}>ALERT!<IoWarningOutline /></Button></Center>
            <Center ><Button _hover={{ bg: 'blue.600' }} mt='50px' bg='#00C3F7' size='lg'variant='solid' onClick={() => handleZoom('in')}>Zoom in<AiOutlineZoomIn /></Button></Center>
            <Center ><Button _hover={{ bg: 'blue.600' }} mt='50px' mb='40px' bg='#00C3F7'size='lg' variant='solid' onClick={() => handleZoom('out')}>Zoom out<AiOutlineZoomOut /></Button></Center>
            <IfAuthenticated>
              <Link to='/'>
                <Center ><Button _hover={{ bg: 'blue.600' }} mt='50px' mb='40px' bg='#00C3F7'size='lg' variant='solid' onClick={(e) => handleLogOut()}>Log out</Button></Center>
              </Link>
            </IfAuthenticated>
            <IfNotAuthenticated>
              <Link to='/'>
                <Center ><Button _hover={{ bg: 'blue.600' }} mt='50px' mb='40px' bg='#00C3F7'size='lg' variant='solid' onClick={(e) => handleRegister(e)}>Register</Button></Center>
              </Link >
              <Link to='/'>
                <Center ><Button _hover={{ bg: 'blue.600' }} mt='50px' mb='40px' bg='#00C3F7'size='lg' variant='solid' onClick={(e) => handleLogIn(e)}>Log in</Button></Center>
              </Link>
            </IfNotAuthenticated>
          </VStack>
        </Box>
      </Flex>
    </>
  )
}
