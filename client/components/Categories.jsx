import React from 'react'
import { useSelector } from 'react-redux'

import Category from './Category'

function Categories () {
  const categories = useSelector(state => state.categories)

  return (
    <div>
      {categories?.map(each => {
        return <Category key={each.id} name={each.category} id={each.id} image={each.image}/>
      })}
    </div>
  )
}

export default Categories
