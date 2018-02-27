import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from 'configs/store'
import { HomeScreen } from 'screens'

import 'assets/stylesheets/base.scss'
import 'assets/stylesheets/common.scss'

render(
  <Provider store={store}>
    <HomeScreen />
  </Provider>,
  document.getElementById('root'),
)
