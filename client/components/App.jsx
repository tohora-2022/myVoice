import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Flex, Container } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import { fetchCategories, fetchItems } from '../actions'
import { cacheUser } from '../auth0-utilities'

import Categories from './Categories'
import DisplayCategory from './DisplayCategory'
import Favourites from './Favourites'
import OutputBox from './OutputBox'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'

function App () {
  const dispatch = useDispatch()
  cacheUser(useAuth0)

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchItems())
  }, [])

  return (
    <>
      <Container maxWidth='container.2xl' backgroundColor='#A6EF18'>
        <Header />
        <OutputBox />
        <Flex>
          <Routes>
            <Route path='/' element={<Categories />} />
            <Route path='/:name' element={<DisplayCategory />} />
            <Route path='/user/favourites' element={<Favourites />} />
          </Routes>
          <Sidebar/>
        </Flex>
        <Footer />
      </Container>
    </>
  )
}

export default App
