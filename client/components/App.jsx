import React from 'react'
import { useSelector } from 'react-redux'

import Category from './Category'

function App () {
  const output = useSelector(state => state.output)

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
      <div>
        <p>{output}</p>
      </div>
      <Category name='categoryName' image={image} items={items}/>
      <Category name='categoryName' image={image} items={items}/>
      <Category name='categoryName' image={image} items={items}/>
    </>
  )
}

export default App
