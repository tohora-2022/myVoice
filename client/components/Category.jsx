import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useBreakpointValue, HStack, Image, Center } from '@chakra-ui/react'

import Item from './Item'

import { setCategory, activePage } from '../actions'
import { getItems } from '../apis/api'

function Category ({ name, id, image }) {
  const [itemsArray, setItemsArray] = useState([])
  const dispatch = useDispatch()
  // const imageSize = useSelector(state => state.zoom)

  useEffect(() => {
    getItems(id)
      .then(items => {
        setItemsArray(items)
        return null
      })
      .catch(e => console.log(e))
  }, [])

  const numToShow = useBreakpointValue({
    base: 5,
    sm: 7
  })

  const rowHeight = useBreakpointValue({
    base: '60px',
    sm: '100px',
    md: '150px'
  })

  const categoryClickHandler = () => {
    dispatch(setCategory(id))
    dispatch(activePage('singleCategory'))
  }

  return (
    <>
      <HStack spacing={name === 'quick' ? 2 : 6} mx={3} px={2} borderRadius={5} mb={1} h={rowHeight} border='2px' borderColor='blue.600'>
        <Center onClick={categoryClickHandler} height="full">
          <Image src={image} alt={name} maxWidth="130px" height="auto"/>
        </Center>
        {name === 'quick' ? <>
          {itemsArray.map((item, i) => {
            return (
              <Item key={i} item={item} />
            )
          })}
        </> : <>
          {itemsArray.slice(0, numToShow).map((item, i) => {
            return <Item key={i} item={item} />
          })}
        </>
        }
      </HStack>
    </>
  )
}

export default Category
