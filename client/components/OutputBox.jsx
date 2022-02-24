import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { clearOutput, removeLastOutputItem } from '../actions'

export default function OutputBox () {
  const output = useSelector(state => state.output)
  const dispatch = useDispatch()

  const [displayOutput, setDisplayOutput] = useState(output)
  const utterance = new SpeechSynthesisUtterance(displayOutput.map(item => item.word).join(' '))
  // Stretch: Add speech speed functionality.
  // utterance.rate = speedInput || 1
  const synth = window.speechSynthesis
  const voices = synth.getVoices()
  // Stretch: Make voice change voice depending on profile setting, (index 0 and 1 are male US, index 2 is female US)
  utterance.voice = voices[2]

  useEffect(() => {
    setDisplayOutput(output)
  }, [output])

  function handleAudioSubmit (e) {
    speechSynthesis.speak(utterance)
  }
  function handleDelete (e) {
    e.preventDefault()
    console.log(output)
    if (output.length !== 0) { dispatch(removeLastOutputItem()) }
  }
  function handleClearAll (e) {
    e.preventDefault()
    dispatch(clearOutput())
  }

  //   if (displayOutput.length !== 0) {
  return (
    <div>
      <button onClick={(e) => handleAudioSubmit}>Audio</button>
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
// }
