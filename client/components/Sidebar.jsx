import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeZoom } from '../actions/zoom'
import { Button, Box, Center, Flex, VStack } from '@chakra-ui/react'
import { IoHomeOutline, IoWarningOutline, IoCloseCircleOutline, IoCheckmarkCircleOutline, IoFlashOutline } from 'react-icons/io5'
import { AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai'
import { activePage } from '../actions'

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

  function homeHandlers () {
    dispatch(activePage('home'))
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

  return (
    <>
      <Flex >
        <Box width={200} bg='gray.50' maxW='xs' align='right' h='100%' borderRadius='md' mr={10} border='2px' borderColor='orange'>
          <VStack outline='orange.100' direction='row' align='center'>
            <Center ><Button _hover={{ bg: 'orange.300' }} mt='40px' bg='orange.100' size='lg' variant='solid' onClick={homeHandlers}>Home <IoHomeOutline /></Button></Center>
            <Center ><Button _hover={{ bg: 'orange.300' }} mt='50px' bg='orange.100' size='lg' variant='solid' onClick={() => speakHandler('Yes')}>Yes <IoCheckmarkCircleOutline /></Button></Center>
            <Center ><Button _hover={{ bg: 'orange.300' }} mt='50px' bg='orange.100'size='lg' variant='solid' onClick={() => speakHandler('No')}>No  <IoCloseCircleOutline /></Button></Center>
            <Center ><Button _hover={{ bg: 'orange.300' }} mt='50px' bg='orange.100'size='lg' variant='solid' onClick={() => speakHandler('Sorry I made a mistake, give me a moment.')}>Mistake<IoFlashOutline /></Button></Center>
            <Center ><Button _hover={{ bg: 'orange.300' }} mt='50px' bg='orange.100' size='lg'variant='solid' onClick={start}>ALERT!<IoWarningOutline /></Button></Center>
            <Center ><Button _hover={{ bg: 'orange.300' }} mt='50px' bg='orange.100' size='lg'variant='solid' onClick={() => handleZoom('in')}>Zoom in<AiOutlineZoomIn /></Button></Center>
            <Center ><Button _hover={{ bg: 'orange.300' }} mt='50px' mb='40px' bg='orange.100'size='lg' variant='solid' onClick={() => handleZoom('out')}>Zoom out<AiOutlineZoomOut /></Button></Center>
          </VStack>
        </Box>
      </Flex>
    </>
  )
}
