import React from 'react'
import { useSelector } from 'react-redux'
import { Wrap, WrapItem, Center } from '@chakra-ui/react'

import BackButton from './BackButton'
import AddButton from './AddButton'
import CustomItem from './CustomItem'

export default function CustomItemsDisplay () {
  const customItems = useSelector(state => state.customItems)

  return (
    <Wrap width='1500px' justify='center' align='center' padding='1' margin='2' borderRadius={5} border='2px' borderColor='blue.600'>
      <WrapItem padding='1' margin='1'>
        <BackButton/>
      </WrapItem>
      {customItems?.map((item, i) => {
        return (
          <WrapItem padding='1' margin='1' key={i}>
            <Center>
              <CustomItem item={item} />
            </Center>
          </WrapItem>
        )
      })}
      <WrapItem padding='1' margin='1'>
        <AddButton extension={'create'}/>
      </WrapItem>
    </Wrap>
  )
}
