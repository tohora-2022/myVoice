import React from 'react'
import { Text, Link, Flex, Spacer, Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <>
      <Box fontFamily='Schoolbell' mt={3} justifyContent='space-between' pt={3} fontSize='md' width='100%' height='120px' wrap="wrap" bgColor='#21AD09' pr={1} border='2px' borderColor='green.600'>
        <Text align='center'>
            MyVoice was proudly created by {' '}
          <Link color='blue.600' href='https://www.linkedin.com/in/carolinavieiradasilva/'isExternal>
            <Spacer />
            Carol,
          </Link>
          <Link pl={1}color='blue.600' href='https://www.linkedin.com/in/paige-moore/' isExternal>
            Paige,
          </Link>
          <Link pl={1}color='blue.600' href='https://www.linkedin.com/in/benjamin-hoggan-96045b123/' isExternal>
            Ben
          </Link>
          and
          <Link pl={1}color='blue.600' href=''>
            Scott
          </Link>
          <Text>
              Tohora 2022 final project
          </Text>
          <Link pl={1}color='blue.600' href='https://devacademy.co.nz/?gclid=CjwKCAiApfeQBhAUEiwA7K_UH3CqfHLb7Q3waFwlOlu28QyorPVXd6ZZkB-M53Q2RbuaH_KuG__jlBoCjYAQAvD_BwE' isExternal>
            Dev Academy
          </Link>
        </Text>
      </Box>
    </>
  )
}

export default Footer
