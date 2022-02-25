import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addOutputItems, clearOutput, removeLastOutputItem } from '../actions'

export default function OutputBox () {
  const output = useSelector(state => state.output)
  const dispatch = useDispatch()

  const [displayOutput, setDisplayOutput] = useState(output)
  const [userInput, setUserInput] = useState('')

  useEffect(() => {
    setDisplayOutput(output)
  }, [output])

  function handleAudioSubmit (e) {
    const utterance = new SpeechSynthesisUtterance(displayOutput.map(item => item[0]).join(' '))
    speechSynthesis.speak(utterance)
  }

  function handleDelete (e) {
    e.preventDefault()
    const tempArray = displayOutput.slice(0, -1)
    if (output.length !== 0) { dispatch(removeLastOutputItem(tempArray)) }
  }

  function handleClearAll (e) {
    e.preventDefault()
    dispatch(clearOutput())
  }

  function handleUserInputSubmit (event) {
    event.preventDefault()
    const utterance = new SpeechSynthesisUtterance(userInput)
    speechSynthesis.speak(utterance)
    dispatch(addOutputItems(userInput.split(' ').map(word => [word])))
    setUserInput('')
  }

  function handleUserInputChange (event) {
    setUserInput(event.target.value)
  }

  return (
    <div>
      <button onClick={(e) => handleAudioSubmit(e)}>Audio</button>
      {displayOutput.map((item, x) => {
        return (
          <span key={`${item[0]}-${x}`}> {item[0]}</span>
        )
      })}
      <div>
        {displayOutput.map((pic, y) => {
          if (pic[1]) {
            return <img key={`${pic[0]}-${y}`} className='categoryImage' src={pic[1]} alt={pic[0]}/>
          } else {
            return <span key={`${pic[0]}-${y}`} className='categoryImage'>{pic[0]}</span>
          }
        })}
        <form onSubmit={handleUserInputSubmit}>
          <input
            className='outputBoxUserInput'
            onChange={handleUserInputChange}
            value={userInput}
            name='userInput' />
        </form>
      </div>
      <button onClick={handleUserInputSubmit}>Submit</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleClearAll}>Clear</button>
    </div>
  )
}
