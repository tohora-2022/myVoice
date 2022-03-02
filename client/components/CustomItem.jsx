import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addOutputItem, removeCustomItem } from '../actions'
import { Image, Center, Button, Flex } from '@chakra-ui/react'
import { RiChatDeleteLine } from 'react-icons/ri'

export default function CustomItem (props) {
  const zoom = useSelector(state => state.zoom)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const itemDetails = props.item

  const synth = window.speechSynthesis
  const voices = synth.getVoices()

  function handleItemClick (e, word, image) {
    e.preventDefault()
    const shortItem = [word, image]
    dispatch(addOutputItem(shortItem))
    const utterance = new SpeechSynthesisUtterance(word)
    utterance.voice = voices[0]
    speechSynthesis.speak(utterance)
  }

  function handleDelete (e) {
    e.preventDefault()
    dispatch(removeCustomItem(itemDetails.id, user.token))
  }

  return (
    <>
      <Center
        width={{ base: '120px', md: `${zoom.width}px` }}
        height="full">
        <Flex direction='column'>
          <Image
            onClick={(e) => handleItemClick(e, itemDetails.word, itemDetails.itemImage)}
            boxSize= {`${zoom.width}px`}
            padding={1}
            src={itemDetails.itemImage}
            alt={itemDetails.word}
            maxHeight="full"
            borderRadius='20px'
          />
          <Center margin={1}>{itemDetails.word}</Center>
          <Button bg='#00C3F7' size='md' variant='solid' fontFamily='Schoolbell' fontSize='2xl' Button _hover={{ bg: 'red.600' }} onClick={handleDelete}>Delete <RiChatDeleteLine /></Button>
        </Flex>
      </Center>
    </>
  )
}
