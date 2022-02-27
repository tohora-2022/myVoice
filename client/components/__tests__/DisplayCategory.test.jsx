import React from 'react'
import { Provider } from 'react-redux'
import { screen, render, waitFor } from '@testing-library/react'
import Router from "react-router-dom";

import DisplayCategory from '../DisplayCategory'
import { getAllItems } from '../../apis/api'

jest.mock('../../apis/api')

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
 }));

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
    jest.spyOn(Router, 'useParams').mockReturnValue({ name: 'actionCheese' })
    fakeStore.getState.mockReturnValue({ items: { actionCheese: [{ itemId: 1, word: 'play', image: 'images/actions/play.png' }, { itemId: 2, word: 'brush teeth', image: 'images/actions/brush_teeth.png' }] } })
    render(<Provider store={fakeStore}><DisplayCategory/></Provider>)
    const listItems = screen.getAllByRole('img')
    expect(listItems).toHaveLength(2)
    expect(listItems[0].alt).toBe('play')
    expect(listItems[1].alt).toBe('brush teeth')
  })
})
