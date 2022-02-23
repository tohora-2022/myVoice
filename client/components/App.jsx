import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchFruits } from '../actions'
import Category from './Category'

function App () {
  const fruits = useSelector(state => state.fruits)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFruits())
  }, [])
  const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'

  return (
    <>
      <div className='app'>
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
      <Category name='categoryName' image={image} items={[image, image, image, image, image, image, image, image, image]}/>
    </>
  )
}

export default App
