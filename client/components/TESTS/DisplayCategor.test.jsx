import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'

import DisplayCategory from '../DisplayCategory'
import { getItems } from '../apis/api'

jest.mock('../apis/api')

describe('<DisplayCategory />', () => {
  const fakeCategory = {
    getState: jest.fn(),
    dispatch: jest.fn()
  }
})
