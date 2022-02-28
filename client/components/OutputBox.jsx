import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Grid, Image, GridItem, Input } from '@chakra-ui/react'
import { AiOutlineSound, AiOutlineDelete } from 'react-icons/ai'
import { RiChatDeleteLine, RiSendPlaneLine } from 'react-icons/ri'
import { addOutputItems, clearOutput, removeLastOutputItem } from '../actions'

export default function OutputBox () {
  const output = useSelector(state => state.output)
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
    dispatch(addOutputItems(userInput.split(' ').map(word => [word])))
    setUserInput('')
  }

  function handleUserInputChange (event) {
    setUserInput(event.target.value)
  }

  return (
    <>
      <Grid fontSize='2xl' align='center' pl='10px' templateColumns='repeat(10, 1fr)'>
        {displayOutput.map((item, x) => {
          return (
            <span key={`${item[0]}-${x}`}> {item[0]}</span>
          )
        })}
      </Grid >
      <Grid pt={1} height='110px' border='2px' mt={7} borderRadius='20px' borderColor='blue.600' templateColumns='repeat(15, 1fr)'>
        {displayOutput.map((pic, y) => {
          if (pic[1]) {
            return <Image boxSize='100px'borderRadius='20px' borderColor='#21ad09' mb={2} key={`${pic[0]}-${y}`} className='categoryImage' src={pic[1]} alt={pic[0]} />
          } else {
            return <span key={`${pic[0]}-${y}`} className='categoryImage'>{pic[0]}</span>
          }
        })}
        <GridItem colStart={15} colEnd={15} h='10' >
          <Button mt={6} ml='30px' bg='#00C3F7' size='lg' variant='solid' Button _hover={{ bg: 'blue.600' }} onClick={(e) => handleAudioSubmit(e)}><AiOutlineSound /></Button>
        </GridItem>
      </Grid>
      <Grid templateColumns='repeat(10, 1fr)'>
        <GridItem colStart={1} colEnd={1}>
          <form onSubmit={handleUserInputSubmit}>
            <Input
              mt='10px'
              isInvalid
              size='sm'
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
        <GridItem colStart={2} colEnd={2}>
          <Button mt='5px' ml='10px'bg='#00C3F7' size='md' variant='solid' Button _hover={{ bg: 'blue.600' }} onClick={handleUserInputSubmit}>Submit <RiSendPlaneLine /></Button>
        </GridItem>
        <GridItem colStart={13} colEnd={13}>
          <Button mt='5px' mr={1}bg='#00C3F7' size='md' variant='solid' Button _hover={{ bg: 'blue.600' }} onClick={handleDelete}>Delete <RiChatDeleteLine /></Button>
        </GridItem>
        <GridItem colStart={15} colEnd={15}>
          <Button mt='5px' bg='#00C3F7' size='md' variant='solid' Button _hover={{ bg: 'blue.600' }} onClick={handleClearAll}>Clear<AiOutlineDelete /></Button>
        </GridItem>
      </Grid>
    </>
  )
}
