import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import { fetchCategories, fetchItems } from '../actions'

import Category from './Category'
import Categories from './Categories'
import DisplayCategory from './DisplayCategory'
import OutputBox from './OutputBox'
import Sidebar from './Sidebar'
import Header from './Header'

function App () {
  const categories = useSelector(state => state.categories)
  const activePage = useSelector(state => state.activePage)
  const dispatch = useDispatch()
  // {categories?.map(each => {
  //   return <Category key={each.id} name={each.category} id={each.id} image={each.image}/>
  // })}

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
