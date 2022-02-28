import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Flex, Container } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'


import { fetchCategories, fetchItems } from '../actions'

import Categories from './Categories'
import DisplayCategory from './DisplayCategory'
import OutputBox from './OutputBox'
import Sidebar from './Sidebar'
import Header from './Header'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchItems())
  }, [])

  return (
    <>

    <Container maxWidth='container.2xl'>
      <Header />
      <OutputBox />
      <Flex>
        <Routes>
          <Route path='/' element={<Categories />} />
          <Route path='/:name' element={<DisplayCategory />} />
        </Routes>
        <Sidebar/>
      </Flex>
    </Container>
    </>
  )
}

export default App
