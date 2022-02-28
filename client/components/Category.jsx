import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useBreakpointValue, HStack, Image, Center } from '@chakra-ui/react'

import Item from './Item'

function Category ({ name, id, image }) {
  const items = useSelector(state => state.items[name])
  // const imageSize = useSelector(state => state.zoom)

  const numToShow = useBreakpointValue({
    base: 5,
    sm: 7
  })

  const rowHeight = useBreakpointValue({
    base: '60px',
    sm: '100px',
    md: '150px'
  })

  return (
    <>
      <HStack spacing={name === 'quick' ? 2 : 6} mx={3} px={2} borderRadius={5} mb={1} h={rowHeight} border='2px' borderColor='blue.600'>
        <Center height="full">
          <Link to={`/${name}`}>
            <Image src={image} alt={name} maxWidth="130px" height="auto"/>
          </Link>

        </Center>
        {name === 'quick' ? <>
          {items?.map((item, i) => {
            return (
              <Item key={i} item={item} />
            )
          })}
        </> : <>
          {items?.slice(0, numToShow).map((item, i) => {
            return <Item key={i} item={item} />
          })}
        </>
        }
      </HStack>
    </>
  )
}

export default Category
