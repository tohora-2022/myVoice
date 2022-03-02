import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { changeZoom } from '../actions'
import { Button, Box, Center, Flex, VStack } from '@chakra-ui/react'
import { IoHomeOutline, IoWarningOutline, IoCloseCircleOutline, IoCheckmarkCircleOutline, IoFlashOutline, IoHeartOutline } from 'react-icons/io5'
import { AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai'
import { SettingsIcon } from '@chakra-ui/icons'
import { useAuth0 } from '@auth0/auth0-react'

export default function Sidebar () {
  const currentZoom = useSelector(state => state.zoom)
  const user = useSelector(state => state.user)
  const { loginWithRedirect } = useAuth0()
  const possibleZoom = ['130', '150', '170', '190', '210']
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const speakHandler = (word) => {
    const utterance = new SpeechSynthesisUtterance(word)
    speechSynthesis.speak(utterance)
  }
  const audio = new Audio('/Airplane-ding-sound.mp3')

  const start = () => {
    audio.play()
  }

  function handleZoom (change) {
    const zoomIndex = possibleZoom.indexOf(currentZoom)
    if (change === 'in' && zoomIndex !== possibleZoom.length - 1) {
      return dispatch(changeZoom(possibleZoom[zoomIndex + 1]))
    }
    if (change === 'out' && zoomIndex !== 0) {
      return dispatch(changeZoom(possibleZoom[zoomIndex - 1]))
    }
  }

  const editCustomClickHandler = (word) => {
    if (!user.token) {
      loginWithRedirect()
    } else {
      speakHandler('custom')
      navigate('/custom')
    }
  }

  return (
    <>
      <Flex ml='120px' >
        <Box width={200} backgroundImage='./images/giraffe.png' height='full'size='xs' pt='25px' align='right' h='100%' borderRadius='md' mr={10} border='2px' borderColor='green.600'>
          <VStack>
            <Link to='/'>
              <Center ><Button _hover={{ bg: 'blue.600', color: 'white' }} bg='#00C3F7' w='150px' h='60px' fontFamily='Schoolbell' fontSize='2xl' variant='solid'>Home <IoHomeOutline /></Button></Center>
            </Link>

            <Link to='/user/favourites'>
              <Center ><Button _hover={{ bg: 'blue.600', color: 'white' }} mt='40px' bg='#00C3F7' w='150px' h='60px' fontFamily='Schoolbell' fontSize='xl' variant='solid' onClick={() => speakHandler('Favourites')}>Favourites <IoHeartOutline /></Button></Center>
            </Link>
            <Center ><Button _hover={{ bg: 'blue.600', color: 'white' }} mt='40px' bg='#00C3F7'w='150px' h='60px' fontFamily='Schoolbell' fontSize='xl' variant='solid' onClick={() => speakHandler('Yes')}>Yes <IoCheckmarkCircleOutline /></Button></Center>
            <Center ><Button _hover={{ bg: 'blue.600', color: 'white' }} mt='40px' bg='#00C3F7' w='150px' h='60px' fontFamily='Schoolbell' fontSize='xl' variant='solid' onClick={() => speakHandler('No')}>No  <IoCloseCircleOutline /></Button></Center>
            <Center ><Button _hover={{ bg: 'blue.600', color: 'white' }} mt='40px' bg='#00C3F7' w='150px' h='60px' fontFamily='Schoolbell' fontSize='xl' variant='solid' onClick={() => speakHandler('Sorry I made a mistake, give me a moment.')}>Mistake <IoFlashOutline /></Button></Center>
            <Center ><Button _hover={{ bg: 'blue.600', color: 'white' }} mt='40px' bg='#00C3F7' w='150px' h='60px' fontFamily='Schoolbell' fontSize='xl' variant='solid' onClick={start}>ALERT! <IoWarningOutline /></Button></Center>
            <Center ><Button _hover={{ bg: 'blue.600', color: 'white' }} mt='40px' bg='#00C3F7' w='150px' h='60px' fontFamily='Schoolbell' fontSize='xl' variant='solid' onClick={() => handleZoom('in')}>Bigger <AiOutlineZoomIn /></Button></Center>
            <Center ><Button _hover={{ bg: 'blue.600', color: 'white' }} mt='40px' bg='#00C3F7' h='60px' fontFamily='Schoolbell' fontSize='xl' w='150px' variant='solid' onClick={() => handleZoom('out')}>Smaller <AiOutlineZoomOut /></Button></Center>
            <Center ><Button _hover={{ bg: 'blue.600', color: 'white' }} mt='40px' mb='40px' bg='#00C3F7' w='150px' h='60px' fontFamily='Schoolbell' fontSize='xl' variant='solid' onClick={editCustomClickHandler}>Custom <SettingsIcon /></Button></Center>
          </VStack>
        </Box>
      </Flex>
    </>
  )
}
