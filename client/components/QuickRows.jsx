import React from 'react'
import { useSelector } from 'react-redux'
import { useBreakpointValue, HStack } from '@chakra-ui/react'

import Item from './Item'

export default function QuickRows ({ name }) {
  const items = useSelector(state => state.items[name])
  const zoom = useSelector(state => state.zoom)

  const half = Math.ceil(items?.length / 2)
  const firstHalf = items?.slice(0, half)
  const secondHalf = items?.slice(-half)

  const numToShow = useBreakpointValue({
    base: 5,
    sm: 8
  })

  const rowHeight = useBreakpointValue({
    base: '60px',
    sm: '100px',
    md: `${zoom}`
  })

  return (
    <>
      <HStack spacing={6} mx={3} px={2} borderRadius={5} mb={1} h={rowHeight} border='2px' borderColor='blue.600'>
        {firstHalf?.slice(0, numToShow).map(item => {
          return <Item key={item.itemId} item={item} />
        })}
      </HStack>
      <HStack spacing={6} mx={3} px={2} borderRadius={5} mb={1} h={rowHeight} border='2px' borderColor='blue.600'>
        {secondHalf?.slice(0, numToShow).map(item => {
          return <Item key={item.itemId} item={item} />
        })}
      </HStack>
    </>
  )
}
