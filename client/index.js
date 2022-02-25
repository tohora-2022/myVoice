import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>,
    </ChakraProvider>,
    document.getElementById('app')
  )
})
