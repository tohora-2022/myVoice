import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useBreakpointValue, HStack, Image, Center } from '@chakra-ui/react'

import Item from './Item'

function Category ({ name, id, image }) {
  const items = useSelector(state => state.items[name])
  const zoom = useSelector(state => state.zoom)

  const numToShow = useBreakpointValue({
    base: 5,
    sm: 8
  })

  const rowHeight = useBreakpointValue({
    base: '50px',
    sm: '90px',
    md: `${(zoom)}px`
  })

  return (
    <>
      <HStack width='1500px' spacing={10} mx={3} px={10} borderRadius={5} mb={1} h={rowHeight} border='2px' borderColor='blue.600'>
        <Center height="full">
          <Link to={`/${name}`}>
            <Image src={image} alt={name} borderRadius='20px' maxWidth={`${zoom}px`} height="auto"/>
          </Link>
        </Center>

        {items?.slice(0, numToShow).map(item => {
          return <Item key={item.itemId} item={item} />
        })}
      </HStack>
    </>
  )
}

export default Category
