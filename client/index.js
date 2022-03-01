import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <ChakraProvider theme={theme}>
      <Auth0Provider
        domain={'tohora-2022-scott.au.auth0.com'}
        clientId={'rRrcleN76am9LNnMikk5oaxFk9ZqONdX'}
        redirectUri={window.location.origin}
        audience='https://myvoice/api'
      >
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>,
      </Auth0Provider>
    </ChakraProvider>,
    document.getElementById('app')
  )
})
