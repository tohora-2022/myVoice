// import React from 'react'
// import { Provider } from 'react-redux'
// import { screen, render } from '@testing-library/react'
// import { useParams } from 'react-router-dom'

// import DisplayCategory from '../DisplayCategory'

jest.mock('../../apis/api')

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useParams: jest.fn()
// }))

describe('<DisplayCategory />', () => {
  const fakeStore = {
    subscribe: jest.fn(),
    getState: jest.fn(),
    dispatch: jest.fn(),
    useParams: jest.fn()
  }

  beforeEach(() => {
    jest.resetAllMocks()
    fakeStore.getState.mockReturnValue([])
    fakeStore.useParams.mockReturnValue({ name: 'name' })
  })

  test.todo('displays items from redux state')
  // , () => {
  //   //jest.spyOn(Router, 'useParams').mockReturnValue({ name: 'actionCheese' })
  //   fakeStore.getState.mockReturnValue({ items: { actionCheese: [{ itemId: 1, word: 'play', image: 'images/actions/play.png' }, { itemId: 2, word: 'brush teeth', image: 'images/actions/brush_teeth.png' }] } })
  //   screen.debug()
  //   render(<Provider store={fakeStore}><DisplayCategory/></Provider>)
  //   const listItems = screen.getAllByRole('list')
  //   expect(listItems).toHaveLength(2)
  //   expect(listItems[0].alt).toBe('play')
  //   expect(listItems[1].alt).toBe('brush teeth')
  // })
})
