import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Flex, Button, Center, Wrap, WrapItem } from '@chakra-ui/react'

import { AiOutlineSound } from 'react-icons/ai'
import OutputBoxOptions from './OutputBoxOptions'
import OutputBoxItem from './OutputBoxItem'

export default function OutputBox () {
  const output = useSelector(state => state.output)

  const [displayOutput, setDisplayOutput] = useState(output)

  const synth = window.speechSynthesis
  const voices = synth.getVoices()

  useEffect(() => {
    setDisplayOutput(output)
  }, [output])

  function handleAudioSubmit (e) {
    const utterance = new SpeechSynthesisUtterance(displayOutput.map(item => item[0]).join(' , '))
    utterance.voice = voices[0]
    speechSynthesis.speak(utterance)
  }

  return (
    <>
      <Flex minW='80%' minH='102px' padding='1' margin='2' borderRadius={5} border='2px' borderColor='blue.600'>
        <Wrap align='center' flexGrow={1} margin='4px'>
          {displayOutput?.map((item, i) => {
            return <OutputBoxItem item={item} key={i}/>
          })}
        </Wrap>
        <Center justify='right'>
          <WrapItem padding='2' margin='3'>
            <Button height='100%' width='100%' bg='#00C3F7' Button _hover={{ bg: 'blue.600' }} onClick={(e) => handleAudioSubmit(e)}><AiOutlineSound size='64px' /></Button>
          </WrapItem>
        </Center>
      </Flex>
      <OutputBoxOptions displayOutput={displayOutput} output={output}/>
    </>
  )
}
