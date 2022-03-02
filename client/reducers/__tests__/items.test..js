import itemsReducer from '../items'

import { setItems } from '../../actions/category'

describe('checks the reducer', () => {
  test('initial state is { }', () => {
    const state = itemsReducer(undefined, { type: 'INIT' })
    expect(state).toEqual({ })
  })
  test('SET_ITEMS sets the items', () => {
    const state = itemsReducer({ oldTestItem: 'oldtestItem' }, setItems({ newTestItem: 'newTestItem' }))
    expect(state).toEqual({ newTestItem: 'newTestItem' })
  })
})
