import React from 'react'
import { useDispatch } from 'react-redux'
import { addOutputItem } from '../actions'
import { Image, Center } from '@chakra-ui/react'

export default function Item (props) {
  const dispatch = useDispatch()
  const itemDetails = props.item

  function handleItemClick (e, word, image) {
    e.preventDefault()
    const shortItem = [word, image]
    dispatch(addOutputItem(shortItem))
    const utterance = new SpeechSynthesisUtterance(word)
    speechSynthesis.speak(utterance)
  }
  return (
    <Center
      onClick={(e) => handleItemClick(e, itemDetails.word, itemDetails.itemImage)}
      width={{ base: '110px', md: '130px' }}
      height="full"
    >
      <Image
        src={itemDetails.itemImage}
        alt={itemDetails.word}
        maxHeight="full"
      />
    </Center>
  )
}
