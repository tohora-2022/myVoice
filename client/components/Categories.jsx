import React from 'react'
import { useSelector } from 'react-redux'

import Category from './Category'
import QuickRows from './QuickRows'

function Categories () {
  const categories = useSelector(state => state.categories)

  return (
    <div>
      {categories?.map(each => {
        if (each.category === 'quick') {
          return <QuickRows key={each.id} name={each.category}/>
        } if (each.category !== 'quick') {
          return <Category key={each.id} name={each.category} id={each.id} image={each.image}/>
        }
      })}
    </div>
  )
}

export default Categories
