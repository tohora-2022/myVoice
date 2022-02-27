import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
      <Header />
      <div className='outputs'>
        <OutputBox />
      </div>
      <div className='inputs'>
        <Routes>
          <Route path='/' element={<Categories />} />
          <Route path='/:name' element={<DisplayCategory />} />
        </Routes>
        <Sidebar/>
      </div>
    </>
  )
}

export default App
