import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useBreakpointValue, Wrap, WrapItem, Center } from '@chakra-ui/react'

import Item from './Item'
import BackButton from './BackButton'

import { fetchFavourites } from '../actions'

export default function Favourites () {
  const dispatch = useDispatch()
  const items = useSelector(state => state.favourites)
  const customItems = useSelector(state => state.customItems)
  const user = useSelector(state => state.user)
  const itemsRowsArray = []

  const numToShow = useBreakpointValue({
    base: 5,
    sm: 7
  })

  useEffect(() => {
    dispatch(fetchFavourites(user.token))
  }, [])

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
      {customItems?.map((item, i) => {
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
