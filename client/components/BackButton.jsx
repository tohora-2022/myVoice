import React from 'react'
import { Image, Center } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'

export default function BackButton () {
  const zoom = useSelector(state => state.zoom)
  const imageSrc = '/images/backButton.png'
  const navigate = useNavigate()

  const onClickHandler = () => {
    navigate(-1)
  }

  return (
    <Center
      onClick={onClickHandler}
      width={{ base: '110px', md: `${zoom.width}px` }}
      height="full"
      padding='2'>
      <Image
        src={imageSrc}
        alt={'backButton'}
        maxHeight="full"
        borderRadius='20px'/>
    </Center>
  )
}
