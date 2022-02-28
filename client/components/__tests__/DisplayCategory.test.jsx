import React from 'react'
import { Provider } from 'react-redux'
import { screen, render, waitFor } from '@testing-library/react'

import DisplayCategory from '../DisplayCategory'
import { getItems } from '../../apis/api'

jest.mock('../../apis/api')

describe('<DisplayCategory />', () => {
  const fakeStore = {
    subscribe: jest.fn(),
    getState: jest.fn(),
    dispatch: jest.fn()
  }

  beforeEach(() => {
    jest.resetAllMocks()
    fakeStore.getState.mockReturnValue([])
  })

  it('displays items from redux state', () => {
    // TODO: This line is sooooo long
    getItems.mockReturnValue(Promise.resolve([{ itemId: 1, word: 'play', image: 'images/actions/play.png' }, { itemId: 2, word: 'brush teeth', image: 'images/actions/brush_teeth.png' }]))
    fakeStore.getState.mockReturnValue({ category: 101 })
    render(<Provider store={fakeStore}><DisplayCategory/></Provider>)
    return waitFor(() => {
      expect(getItems).toHaveBeenCalled()
    })
      .then(() => {
        const listItems = screen.getAllByRole('img')
        expect(listItems).toHaveLength(2)
        expect(listItems[0].alt).toBe('play')
        expect(listItems[1].alt).toBe('brush teeth')
        return null
      })
  })
})
