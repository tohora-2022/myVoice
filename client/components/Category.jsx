import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Item from './Item'

import { setCategory } from '../actions/category'
import { getItems } from '../apis/api'

function Category ({ name, id, image }) {
  const [itemsArray, setItemsArray] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    getItems(id)
      .then(x => {
        setItemsArray(x.slice(0, 5))
        return null
      })
      .catch(e => console.log(e))
  }, [])

  // // Dynamic Dimensions, to be used later for other display sizes.
  // const [screenSize, setScreenSize] = useState({ dynamicWidth: window.innerWidth, dynamicHeight: window.innerHeight })
  // const setDimension = () => { setScreenSize({ dynamicWidth: window.innerWidth, dynamicHeight: window.innerHeight }) }

  // useEffect(() => {
  //   window.addEventListener('resize', setDimension)
  //   setItemsArray(itemsArray.slice(0, 5))
  //   return () => { window.removeEventListener('resize', setDimension) }
  // }, [screenSize])

  const categoryClickHandler = () => {
    dispatch(setCategory(name))
  }

  return (
    <div className='category'>
      <div className='categoryName' onClick={categoryClickHandler}>
        <img className='categoryImage' src={image}/>
      </div>
      {itemsArray &&
        <div className='categoryItems'>
          {itemsArray.map((item, i) => {
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
