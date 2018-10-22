import { ReduxState } from '~/store/types'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'

const createNavigationMiddleware = () => createReactNavigationReduxMiddleware(
    'root',
    (state: ReduxState) => state.navigation
  )

export default createNavigationMiddleware
