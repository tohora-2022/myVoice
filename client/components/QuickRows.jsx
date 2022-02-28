import React from 'react'
import { useSelector } from 'react-redux'
import { useBreakpointValue, HStack, Center } from '@chakra-ui/react'

import Item from './Item'

export default function QuickRows ({ name }) {
  const items = useSelector(state => state.items[name])

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
      <HStack spacing={6} mx={3} px={2} borderRadius={5} mb={1} h={rowHeight} border='2px' borderColor='blue.600'>
        <Center height="full">
          {items?.map(item => {
            return <Item key={item.itemId} item={item} />
          })}
        </Center>
      </HStack>
    </>
  )
}
