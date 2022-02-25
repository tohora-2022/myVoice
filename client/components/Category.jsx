import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Item from './Item'

import { setCategory, activePage } from '../actions'
import { getItems } from '../apis/api'

function Category ({ name, id, image }) {
  const [itemsArray, setItemsArray] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    getItems(id)
      .then(items => {
        setItemsArray(items)
        return null
      })
      .catch(e => console.log(e))
  }, [])

  const categoryClickHandler = () => {
    dispatch(setCategory(id))
    dispatch(activePage('singleCategory'))
  }

  return (
    <div className='category'>
      <div className='categoryName' onClick={categoryClickHandler}>
        <img className='categoryImage' src={image} alt={name}/>
      </div>
      {name === 'quick' ? <div className='categoryItems'>
        {itemsArray.map((item, i) => {
          return (
            <Item key={i} item={item} />
          )
        })}
      </div> : <div className='categoryItems'>
        {itemsArray.slice(0, 5).map((item, i) => {
          return (
            <Item key={i} item={item} />
          )
        })}
      </div>
      }
    </div>
  )
}

export default Category
