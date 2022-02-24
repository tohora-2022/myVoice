import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Item from './Item'
import { getItems } from '../apis/api'

export default function DisplayCategory () {
  const categoryId = useSelector(state => state.category)
  const [displayItems, setDisplayItems] = useState()
  // const dispatch = useDispatch()

  console.log(categoryId)
  useEffect(() => {
    getItems(categoryId)
      .then((items) => {
        console.log('items: ', items)
        setDisplayItems(items)
        return null
      })
      .catch(e => console.log(e))
  }, [])

  return (
    <div className='categoryItems'>
      {displayItems?.map(item => {
        return <Item key={item.itemId} item={item}/>
      })}
    </div>
  )
}
