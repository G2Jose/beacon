import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { store, persistor } from '~/store'
import { PersistGate } from 'redux-persist/integration/react'
import LayoutAwareApp from './LayoutAwareApp'

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <LayoutAwareApp />
        </PersistGate>
      </Provider>
    )
  }
}
