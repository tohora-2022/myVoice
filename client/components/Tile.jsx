import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addOutputItem } from '../actions'

export default function Tile (props) {
  const dispatch = useDispatch()
  const output = useSelector(state => state.output)
  // const items = useSelector(state => state.items)
  // placeholder props.item
  const item = { id: 1, word: 'cheese', image: 'yes', categories_id: 2, tag: 'noun' }
  console.log(item)

  function handleTileClick (word, image) {
    const shortItem = [word, image]
    console.log('item: ', shortItem)
    dispatch(addOutputItem(shortItem))
  }
  if (output.length === 0) {
    return (
      <div className={`${item.tag}-item-tile`} key={`${item.id} ${item.categories_id}`}>
        <img onClick={() => handleTileClick(item.word, item.image)} src={`${item.image}`} alt={`${item.word}`}/>
        <p>{item.word}</p>
      </div>
    )
  }
  return (
    <>
      <div>
        <p>{output}</p>
      </div>
      <div className={`${item.tag}-item-tile`} onClick={(e) => handleTileClick(e, item.word, item.image)} key={`${item.id} ${item.categories_id}`}>
        <img src={`${item.image}`} alt={`${item.word}`}/>
        <p>{item.word}</p>
      </div>
    </>
  )
}
