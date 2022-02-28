import React from 'react'
import { useDispatch } from 'react-redux'
import { addOutputItem } from '../actions'
import { Image, Center } from '@chakra-ui/react'

export default function Item (props) {
  const dispatch = useDispatch()
  // If we destructure this here, it can make the rest much clearer (IMO)
  const { word, itemImage } = props.item

  // TODO: since word and itemImage are values that are already in scope
  // you can use them directly in the handleItemClick function. Use the `useCallback` hook
  // so to unecessary re-renders: https://reactjs.org/docs/hooks-reference.html#usecallback
  const handleItemClick = React.useCallback(function (e) {
    e.preventDefault()
    const shortItem = [word, itemImage]
    dispatch(addOutputItem(shortItem))

    // TODO: how do we test this?
    const utterance = new SpeechSynthesisUtterance(word)
    speechSynthesis.speak(utterance)
  }, [word, itemImage])

  return (
    <Center
      onClick={handleItemClick}
      width={{ base: '110px', md: '130px' }}
      height="full"
    >
      <Image
        src={itemImage}
        alt={word}
        maxHeight="full"
      />
    </Center>
  )
}
