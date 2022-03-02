import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Flex, Container } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import { fetchCategories, fetchCustomItems, fetchItems } from '../actions'
import { cacheUser } from '../auth0-utilities'

import Categories from './Categories'
import CustomItemsDisplay from './CustomItemsDisplay'
import CustomItemsCreate from './CustomItemsCreate'
import DisplayCategory from './DisplayCategory'
import OutputBox from './OutputBox'
import Sidebar from './Sidebar'
import Header from './Header'

function App () {
  const dispatch = useDispatch()
  cacheUser(useAuth0)
  const user = useSelector(state => state.user)

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchItems())
  }, [])

  useEffect(() => {
    if (user.token) {
      dispatch(fetchCustomItems(user.token))
    }
  }, [user])

  return (
    <>
      <Container maxWidth='container.2xl' backgroundColor='#A6EF18'>
        <Header />
        <OutputBox />
        <Flex>
          <Routes>
            <Route path='/' element={<Categories />} />
            <Route path='/custom' element={<CustomItemsDisplay />} />
            <Route path='/custom/create' element={<CustomItemsCreate />} />
            <Route path='/:name' element={<DisplayCategory />} />
          </Routes>
          <Sidebar/>
        </Flex>
      </Container>
    </>
  )
}

export default App
