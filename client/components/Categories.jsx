import React from 'react'
import { useSelector } from 'react-redux'

import Category from './Category'
import QuickRows from './QuickRows'

function Categories () {
  const categories = useSelector(state => state.categories)

  // function splitInHalf (arr) {
  //   const half = Math.ceil(arr.length / 2)
  //   const firstHalf = arr.slice(0, half)
  //   const secondHalf = arr.slice(-half)

  //   return [firstHalf, secondHalf]
  // }

  return (
    <div>
      {categories?.map(each => {
        each.category === 'quick' ? <QuickRows key={each.id} name={each.category}/> : <Category key={each.id} name={each.category} id={each.id} image={each.image}/>
      })}
    </div>
  )
}

export default Categories
