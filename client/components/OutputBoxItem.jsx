import React from 'react'
import { Image, Center, WrapItem } from '@chakra-ui/react'

export default function OutputBoxItem ({ item }) {
  if (item[1]) {
    return (
      <WrapItem padding='1' margin='1'>
        <Center>
          <Image
            boxSize='86px'
            borderRadius='20px'
            src={item[1]}
            alt={item[0]} />
        </Center>
      </WrapItem>
    )
  } else {
    return (
      <Center minWidth='86px' minHeight='86px' textTransform='capitalize' as='u' fontWeight='bold'>
        {item[0]}
      </Center>
    )
  }
}
