import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'

import Category from './Category'

function App () {
  const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
  const items = [{ item1: image }, { item2: image }, { item3: image }, { item4: image }, { item5: image }, { item6: image }]
  return (
    <>
      <Category name='categoryName' image={image} items={items}/>
    </>
  )
}

export default App
