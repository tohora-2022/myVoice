import React, { useEffect, useState } from 'react'
import { Image, Center } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function AddButton ({ extension }) {
  const zoom = useSelector(state => state.zoom)
  const imageSrc = '/images/addButton.png'
  const [path, setPath] = useState(useLocation().pathname)

  useEffect(() => {
    if (path.charAt(path.length - 1) === '/') {
      setPath(path.substring(0, path.length - 1))
    }
  }, [])

  return (
    <Link to={`${path}/${extension}`}>
      <Center
        width={{ base: '110px', md: `${zoom}px` }}
        height="full"
        padding='2'>
        <Image
          src={imageSrc}
          alt={'addButton'}
          maxHeight="full"
          borderRadius='20px'/>
      </Center>
    </Link>
  )
}
