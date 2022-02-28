import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addOutputItem } from '../actions'
import { Image, Center } from '@chakra-ui/react'

export default function Item (props) {
  const zoom = useSelector(state => state.zoom)
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
      width={{ base: '110px', md: `${zoom}px` }}
      height="full"
    >
      <Image
        boxSize= {`${zoom}px`}
        src={itemDetails.itemImage}
        alt={itemDetails.word}
        maxHeight="full"
        borderRadius='20px'
      />
    </Center>
  )
}
