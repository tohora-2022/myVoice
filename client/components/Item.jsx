import React from 'react'
import { useDispatch } from 'react-redux'
import { addOutputItem } from '../actions'

export default function Item (props) {
  const dispatch = useDispatch()
  const itemDetails = props.item

  function handleItemClick (e, word, image) {
    e.preventDefault()
    const shortItem = [word, image]
    dispatch(addOutputItem(shortItem))
    const utterance = new SpeechSynthesisUtterance(word)
    speechSynthesis.speak(utterance)
  }
  return (
    <div className='categoryItem' onClick={(e) => handleItemClick(e, itemDetails.word, itemDetails.image)}>
      <img className='categoryImage' src={itemDetails.image} alt={itemDetails.word}/>
      <p>{itemDetails.word}</p>
    </div>
  )
}
