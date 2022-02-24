import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchCategories } from '../actions/category'
import Category from './Category'
import OutputBox from './OutputBox'
import Sidebar from './Sidebar'

function App () {
  const output = useSelector(state => state.output)
  const categories = useSelector(state => state.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'

  return (
    <>
      <div className='outputs'>
        <OutputBox />
      </div>
      <div className='inputs'>
        <div>
          {categories?.map(each => {
            return <Category key={each.id} name={each.category} id={each.id} image={image}/>
          })}
        </div>
        <Sidebar/>
      </div>
    </>
  )
}

export default App
