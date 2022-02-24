import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { clearOutput, removeLastOutputItem } from '../actions'

export default function OutputBox () {
  const output = useSelector(state => state.output)
  const dispatch = useDispatch()

  const [displayOutput, setDisplayOutput] = useState(output)

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
          return (
            <img key={`${pic[0]}-${y}`} className='outputImage' src={pic[1]} alt={pic[0]}/>

          )
        })}
      </div>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleClearAll}>Clear</button>
    </div>
  )
}
