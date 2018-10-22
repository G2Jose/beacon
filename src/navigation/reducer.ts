import { createNavigationReducer } from 'react-navigation-redux-helpers'
import { RootNavigator } from '~/navigation'

const navigation = createNavigationReducer(RootNavigator)

export default navigation
