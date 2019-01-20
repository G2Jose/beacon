import { createStackNavigator } from 'react-navigation'
import { reduxifyNavigator } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import ChatListScreen from '~/chat/chatListScreen'
import constants from '~/common/constants'
import { ReduxState } from '~/store/types'
import createNavigationMiddleware from '~/navigation/middleware'

const options = {
  navigationOptions: () => ({
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: constants.colors.titleBar,
    },
  }),
  initialRouteName: 'Chats',
  cardStyle: {
    backgroundColor: 'white',
  },
}

export const routes = {
  Chats: {
    screen: ChatListScreen,
    navigationOptions: () => ({
      title: constants.appName,
    }),
  },
}

export const RootNavigator = createStackNavigator(routes, options)

const navigationMiddleware = createNavigationMiddleware()

const reduxifiedNavigator = reduxifyNavigator(RootNavigator, 'root')

const mapStateToProps = (state: ReduxState) => ({
  state: state.navigation,
})

const AppWithNavigationState = connect(mapStateToProps)(
  reduxifiedNavigator as any
)

export default AppWithNavigationState
export { navigationMiddleware }
