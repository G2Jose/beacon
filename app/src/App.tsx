import React, { Component } from 'react'
import { Provider } from 'react-redux'

import AppWithNavigationState from '~/navigation'
import store from '~/store'

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}
