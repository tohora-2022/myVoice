import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useBreakpointValue, Wrap, WrapItem, Center } from '@chakra-ui/react'

import Item from './Item'
import BackButton from './BackButton'

export default function DisplayCategory () {
  const { name } = useParams()
  const items = useSelector(state => state.items[name])
  // const imageSize = useSelector(state => state.zoom)
  const itemsRowsArray = []

  const numToShow = useBreakpointValue({
    base: 5,
    sm: 7
  })

  useEffect(() => {
    if (items) {
      items.forEach((item, i) => {
        const index = Math.floor(i / numToShow)
        if (itemsRowsArray[index]) {
          itemsRowsArray[index].push(item)
        } else {
          itemsRowsArray[index] = [item]
        }
      })
    }
  }, [items])

  return (
    <Wrap justify='center' align='center' padding='1' margin='2' borderRadius={5} border='2px' borderColor='blue.600'>
      <WrapItem padding='1' margin='1'>
        <BackButton/>
      </WrapItem>
      {items?.map((item, i) => {
        return (
          <WrapItem padding='1' margin='1' key={i}>
            <Center>
              <Item item={item} />
            </Center>
          </WrapItem>
        )
      })}
    </Wrap>
  )
}
