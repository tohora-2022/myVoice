import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'

import Item from './Item'
import { fetchCategory } from '../actions'

export default function DisplayCategory () {
  const { name } = useParams()
  const category = useSelector(state => state.items[name])
  console.log('c: ', category)



  return (
    <div className='categoryItems'>
      {category?.map(item => {
        return <Item key={item.itemId} item={item} />
      })}
    </div>
  )
}
