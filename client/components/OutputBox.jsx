import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Grid, Image, GridItem, Input, Center } from '@chakra-ui/react'

import { AiOutlineSound, AiOutlineDelete } from 'react-icons/ai'
import { RiChatDeleteLine, RiSendPlaneLine } from 'react-icons/ri'
import { addOutputItems, clearOutput, removeLastOutputItem } from '../actions'

export default function OutputBox () {
  const output = useSelector(state => state.output)
  const items = useSelector(state => state.items)
  const dispatch = useDispatch()

  const [displayOutput, setDisplayOutput] = useState(output)
  const [userInput, setUserInput] = useState('')

  useEffect(() => {
    setDisplayOutput(output)
  }, [output])

  function handleAudioSubmit (e) {
    const utterance = new SpeechSynthesisUtterance(displayOutput.map(item => item[0]).join(' '))
    speechSynthesis.speak(utterance)
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

    const userInputArray = userInput.split(' ').map(word => [word])
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

  function handleUserInputChange (event) {
    setUserInput(event.target.value)
  }

  return (
    <>
      <Grid fontSize='2xl'backgroundColor='#d8fe8e' pt={1} height='120px' ml={3} border='2px' mt={5} borderRadius='20px' borderColor='blue.600' templateColumns='repeat(15, 1fr)'>
        {displayOutput.map((pic, y) => {
          if (pic[1]) {
            return (
              <Center justifyContent='center'>
                <Image boxSize='110px' borderRadius='20px' borderColor='#21ad09' mb={3} key={`${pic[0]}-${y}`} className='categoryImage' src={pic[1]} alt={pic[0]} />
              </Center>
            )
          } else {
            return (
              <Center textTransform='capitalize' as='u' fontWeight='bold'>
                {pic[0]}
              </Center>
            )
          }
        })}
        <GridItem colStart={15} colEnd={15}>
          <Button mt={8} ml='30px' bg='#00C3F7' size='md' variant='solid' Button _hover={{ bg: 'blue.600' }} onClick={(e) => handleAudioSubmit(e)}><AiOutlineSound size='30px' /></Button>
        </GridItem>
      </Grid>
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
    </>
  )
}
