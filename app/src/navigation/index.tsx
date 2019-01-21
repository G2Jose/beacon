import { createStackNavigator, NavigationParams } from 'react-navigation'
import { reduxifyNavigator } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import ChatListScreen from '~/chat/chatListScreen'
import ChatScreen from '~/chat/chatScreen'
import constants from '~/common/constants'
import { ReduxState } from '~/store/types'
import createNavigationMiddleware from '~/navigation/middleware'
import { ViewStyle, StyleProp } from 'react-native'
import { Route } from './types'

type Options = {
  initialRouteName: Route
  navigationOptions: () => any
  cardStyle: StyleProp<ViewStyle>
}

const options: Options = {
  navigationOptions: () => ({
    headerTintColor: 'white',
    headerStyle: { backgroundColor: constants.colors.titleBar },
  }),
  initialRouteName: 'ChatListScreen',
  cardStyle: { backgroundColor: 'white' },
}

export const routes = {
  ChatListScreen: {
    screen: ChatListScreen,
    navigationOptions: () => ({
      title: constants.appName,
    }),
  },
  ChatScreen: {
    screen: ChatScreen,
    navigationOptions: (props: NavigationParams) => ({
      title: props.navigation.state.params.name,
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
