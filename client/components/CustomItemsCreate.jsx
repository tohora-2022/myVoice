import { Button, Input, Wrap } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiSendPlane2Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { addCustomItem } from '../actions'
import BackButton from './BackButton'

const CustomItemsCreate = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const [file, setFile] = useState({ })
  const [word, setWord] = useState('')
  const [message, setMessage] = useState('')

  const onFileChange = e => {
    setFile(e.target.files[0])
  }

  const onWordChange = e => {
    setWord(e.target.value)
  }

  const onSubmit = async e => {
    e.preventDefault()
    if (word === '') {
      return
    }
    const formData = new FormData()
    formData.append('file', file)
    formData.append('word', word)

    dispatch(addCustomItem(formData, user.token))
    setMessage('Success!')
  }

  return (
    <>
      <Wrap padding='4' >
        <BackButton/>
        <form onSubmit={onSubmit} >
          <input
            type='file'
            className='customItemFileInput'
            id='customItemFileInput'
            onChange={onFileChange}
          />
          {message && <>{message}</>}
          <Input
            width='100%'
            type='text'
            margin='10px'
            isInvalid
            size='sm'
            backgroundColor='#8FF4E7'
            borderRadius='20px'
            errorBorderColor='#21ad09'
            placeholder='Write the word for this image'
            className='customItemWordInput'
            onChange={onWordChange}
            value={word}
            name='userInput'/>
          <Button
            width='100%'
            mt='5px'
            ml='10px'
            bg='#00C3F7'
            size='md'
            variant='solid'
            fontFamily='Schoolbell'
            fontSize='2xl'
            Button _hover={{ bg: 'blue.600' }}
            onClick={onSubmit}>
              Upload <RiSendPlane2Line />
          </Button>
        </form>
      </Wrap>
    </>
  )
}

export default CustomItemsCreate
