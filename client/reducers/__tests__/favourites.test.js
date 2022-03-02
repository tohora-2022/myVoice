import favouritesReducer from '../favourites'

import { userFavourites, includeFavourite } from '../../actions/favourites'

describe('checks the reducer', () => {
  test('initial state is []', () => {
    const state = favouritesReducer(undefined, { type: 'INIT' })
    expect(state).toEqual([])
  })
  test('SET_FAVOURITES sets the favourites', () => {
    const state = favouritesReducer(['oldTestFavourite'], userFavourites(['newTestFavourite', 'newTestFavourite2']))
    expect(state).toEqual(['newTestFavourite', 'newTestFavourite2'])
  })
  test('ADD_FAVOURITES adds a favourite to the array', () => {
    const state = favouritesReducer(['oldTestFavourite'], includeFavourite('newTestCategories1'))
    expect(state).toEqual(['oldTestFavourite', 'newTestCategories1'])
  })
})
