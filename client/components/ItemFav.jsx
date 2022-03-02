import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addOutputItem, removeFavourite } from '../actions'
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

  function clickRemoveFavourite (e) {
    e.preventDefault()
    dispatch(removeFavourite(itemDetails.itemId, user.token))
  }

  const [isHovering, setIsHovering] = useState(false)

  function handleMouseEnter () {
    setIsHovering(true)
  }

  function handleMouseLeave () {
    setIsHovering(false)
  }

  return (
    <>
      <Center
        width={{ base: '120px', md: `${zoom.width}px` }}
        height="full">
        <Image
          onClick={(e) => handleItemClick(e, itemDetails.word, itemDetails.itemImage)}
          boxSize= {`${zoom.width}px`}
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
        <Tooltip hasArrow label='Delete from favorites' bg='blue.600' >
          <Badge cursor='pointer' size={30} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} bgColor = 'transparent' alignSelf='flex-start' ml={-7} mt={3}>
            <HiOutlineStar size={30} visibility={isHovering ? 'visible' : 'hidden'} onClick={(e) => clickRemoveFavourite(e)}/>
          </Badge>
        </Tooltip>
      </Center>
    </>
  )
}
