import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '~/store/reducer'
import middleware from '~/store/middleware'

let composeEnhancers = compose
if (global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
}

const enhancer = composeEnhancers(applyMiddleware(...middleware))

const store = createStore(rootReducer, enhancer)

export default store
