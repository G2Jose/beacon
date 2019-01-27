import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from '~/store'
import LayoutAwareApp from './LayoutAwareApp'

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <LayoutAwareApp />
      </Provider>
    )
  }
}
