import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Grid, GridItem, Input } from '@chakra-ui/react'

import { AiOutlineDelete } from 'react-icons/ai'
import { RiChatDeleteLine, RiSendPlaneLine } from 'react-icons/ri'
import { addOutputItems, clearOutput, removeLastOutputItem } from '../actions'

export default function OutputBoxOptions ({ displayOutput, output }) {
  const items = useSelector(state => state.items)
  const [userInput, setUserInput] = useState('')
  const dispatch = useDispatch()

  function handleUserInputChange (event) {
    setUserInput(event.target.value)
  }

  function handleDelete (e) {
    e.preventDefault()
    const tempArray = displayOutput.slice(0, -1)
    if (output.length !== 0) { dispatch(removeLastOutputItem(tempArray)) }
  }

  function handleClearAll (e) {
    e.preventDefault()
    dispatch(clearOutput())
  }

  function handleUserInputSubmit (event) {
    event.preventDefault()
    const utterance = new SpeechSynthesisUtterance(userInput)
    speechSynthesis.speak(utterance)

    const userInputArray = userInput.split(' ').filter(word => word !== '' && word.length < 51).map(word => [word])
    const userInputPayload = userInputArray.map(word => {
      const item = customFilter(items, 'word', word[0].toLowerCase())
      if (item) {
        return [item.word, item.itemImage]
      } else {
        return [word]
      }
    })
    dispatch(addOutputItems(userInputPayload))
    setUserInput('')
  }

  const customFilter = (object, key, value) => {
    if (Array.isArray(object)) {
      for (const obj of object) {
        const result = customFilter(obj, key, value)
        if (result) {
          return obj
        }
      }
    } else {
      // eslint-disable-next-line no-prototype-builtins
      if (object.hasOwnProperty(key) && object[key] === value) {
        return object
      }

      for (const k of Object.keys(object)) {
        if (typeof object[k] === 'object') {
          const o = customFilter(object[k], key, value)
          if (o !== null && typeof o !== 'undefined') { return o }
        }
      }
      return null
    }
  }

  return (
    <Grid ml={5} templateColumns='repeat(10, 1fr)'>
      <GridItem colStart={1} colEnd={1}>
        <form onSubmit={handleUserInputSubmit}>
          <Input
            mt='10px'
            isInvalid
            size='sm'
            backgroundColor='#8FF4E7'
            width='400px'
            borderRadius='20px'
            errorBorderColor='#21ad09'
            placeholder='Write something to say'
            className='outputBoxUserInput'
            onChange={handleUserInputChange}
            value={userInput}
            name='userInput' />
        </form>
      </GridItem>
      <GridItem colStart={2} colEnd={2} >
        <Button mt='5px' ml='10px' bg='#00C3F7' size='md' variant='solid' fontFamily='Schoolbell' fontSize='2xl' Button _hover={{ bg: 'blue.600' }} onClick={handleUserInputSubmit}>Submit <RiSendPlaneLine /></Button>
      </GridItem>
      <GridItem colStart={13} colEnd={13} mr={3}>
        <Button mt='5px' mr={1}bg='#00C3F7' size='md' variant='solid' fontFamily='Schoolbell' fontSize='2xl' Button _hover={{ bg: 'blue.600' }} onClick={handleDelete}>Delete <RiChatDeleteLine /></Button>
      </GridItem>
      <GridItem colStart={15} colEnd={15}mr={3}>
        <Button mt='5px' mb='5px' bg='#00C3F7' mr={3} size='md' variant='solid' fontFamily='Schoolbell' fontSize='2xl'Button _hover={{ bg: 'blue.600' }} onClick={handleClearAll}>Clear<AiOutlineDelete /></Button>
      </GridItem>
    </Grid>
  )
}
