import React from 'react'
import { useDispatch } from 'react-redux'

import { activePage, clearCategory } from '../actions'

function Sidebar () {
  const dispatch = useDispatch()

  function homeHandlers () {
    dispatch(clearCategory())
    dispatch(activePage('home'))
  }

  return (
    // TODO images for sidebar menu options.
    <div className='sidebar'>
      <button className='sidebarButton' onClick={homeHandlers}>Home</button>
      <div className='sidebarButton'>Yes</div>
      <div className='sidebarButton'>No</div>
      <div className='sidebarButton'>Mistake</div>
      <div className='sidebarButton'>Alert!</div>
      <div className='sidebarButton'>Zoom In</div>
      <div className='sidebarButton'>Zoom Out</div>
    </div>
  )
}

export default Sidebar
