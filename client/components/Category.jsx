import React, { useState, useEffect } from 'react'

function Category ({ name, image, items }) {
  const [itemsToDisplay, setItemsToDisplay] = useState()
  console.log(items.slice(0, 5))
  // Dynamic Dimension, to be used for other display sizes.
  const [screenSize, setScreenSize] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  })
  const setDimension = () => {
    setScreenSize({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }
  useEffect(() => {
    window.addEventListener('resize', setDimension)
    setItemsToDisplay(1)
    return () => {
      window.removeEventListener('resize', setDimension)
    }
  }, [screenSize])

  useEffect(() => {
    setItemsToDisplay(items.slice(0, 5))
  }, [items])

  return (
    <div className='category'>
      <div className='categoryName'>
        <img className='categoryImage' src={image}/>
        {name}
      </div>
      {itemsToDisplay &&
        <div className='categoryItems'>
          {itemsToDisplay.map((item, i) => (
            // TODO Item Component
            <img key={i} className='categoryImage' src={item}/>
            // <div className='categoryItem' key={item}>Here{item}</div>
          ))}
        </div>
      }
    </div>
  )
}

export default Category
