import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchCategories } from '../actions/category'
import Category from './Category'
import Sidebar from './Sidebar'

function App () {
  const output = useSelector(state => state.output)
  const categories = useSelector(state => state.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
  const items = [
    { id: 1, word: 'word1', image: image, tag: 'tag1' },
    { id: 2, word: 'word2', image: image, tag: 'tag1' },
    { id: 3, word: 'word3', image: image, tag: 'tag1' },
    { id: 4, word: 'word4', image: image, tag: 'tag1' },
    { id: 5, word: 'word5', image: image, tag: 'tag1' },
    { id: 6, word: 'word6', image: image, tag: 'tag1' }
  ]
  return (
    <>
      <div className='outputs'>
        <p>{output}</p>
      </div>
      <div className='inputs'>
        <div>
          {categories?.map(each => {
            return <Category key={each.id} name={each.category} id={each.id} image={image} items={items}/>
          })}
        </div>
        <Sidebar/>
      </div>
    </>
  )
}

export default App
