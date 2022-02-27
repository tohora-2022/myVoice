import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchCategories } from '../actions'
import Category from './Category'
import DisplayCategory from './DisplayCategory'
import OutputBox from './OutputBox'
import Sidebar from './Sidebar'
import Header from './Header'

function App () {
  const categories = useSelector(state => state.categories)
  const activePage = useSelector(state => state.activePage)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  return (
    <>
    <Header />
      <div className='outputs'>
        <OutputBox />
      </div>
      <div className='inputs'>
        {(activePage === 'singleCategory') ? <>
          <DisplayCategory />
        </> : <div>
          {categories?.map(each => {
            return <Category key={each.id} name={each.category} id={each.id} image={each.image}/>
          })}
        </div>}
        <Sidebar/>
      </div>
    </>
  )
}

export default App
