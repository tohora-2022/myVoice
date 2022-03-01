import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { addOutputItem, newFavourite, removeFavourite } from '../actions'
import { addOutputItem } from '../actions'
import { Image, Center } from '@chakra-ui/react'

export default function Item (props) {
  const zoom = useSelector(state => state.zoom)
  // const user = useSelector(state => state.user)
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

  // function clickSaveFavourite (e) {
  //   e.preventDefault()
  //   dispatch(newFavourite(itemDetails.itemId, user.token))
  // }

  // function clickRemoveFavourite (e) {
  //   e.preventDefault()
  //   dispatch(removeFavourite(itemDetails.itemId, user.token))
  // }

  return (
    <Center
      onClick={(e) => handleItemClick(e, itemDetails.word, itemDetails.itemImage)}
      width={{ base: '120px', md: `${zoom}px` }}
      height="full">
      <Image
        boxSize= {`${zoom}px`}
        padding={1}
        src={itemDetails.itemImage}
        alt={itemDetails.word}
        maxHeight="full"
        borderRadius='20px'
      />
    </Center>
  )
}
