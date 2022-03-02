import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addOutputItem, newFavourite } from '../actions'
import { Image, Center, Badge, Tooltip } from '@chakra-ui/react'

import { HiOutlineStar } from 'react-icons/hi'

export default function Item (props) {
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

  function clickSaveFavourite (e) {
    e.preventDefault()
    dispatch(newFavourite(itemDetails.itemId, user.token))
  }

  const [isHovering, setIsHovering] = useState(false)

  function handleMouseEnter () {
    console.log('handleMouseEnter')
    setIsHovering(true)
  }

  function handleMouseLeave () {
    console.log('handleMouseLeave')
    setIsHovering(false)
  }

  return (
    <>
      <Center
        width={{ base: '120px', md: `${zoom}px` }}
        height="full">
        <Image
          onClick={(e) => handleItemClick(e, itemDetails.word, itemDetails.itemImage)}
          boxSize= {`${zoom}px`}
          padding={1}
          boxShadow='dark-lg'
          src={itemDetails.itemImage}
          alt={itemDetails.word}
          maxHeight="full"
          borderRadius='20px'
          cursor='pointer'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <Badge cursor='pointer' size={30} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} bgColor = 'transparent' alignSelf='flex-start' ml={-7} mt={3}>
          <HiOutlineStar size={30} visibility={isHovering ? 'visible' : 'hidden'} onClick={(e) => clickSaveFavourite(e)}/>
        </Badge>
      </Center>
    </>
  )
}
