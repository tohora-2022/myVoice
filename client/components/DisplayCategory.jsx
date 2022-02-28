import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Item from './Item'

export default function DisplayCategory () {
  const { name } = useParams()
  const category = useSelector(state => state.items[name])
 

  return (
    <div className='categoryItems'>
      {category?.map(item => {
        return <Item key={item.itemId} item={item} />
      })}
    </div>
  )
}
