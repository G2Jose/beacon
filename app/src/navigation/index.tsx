import { createStackNavigator, NavigationParams } from 'react-navigation'
import React from 'react'
import { reduxifyNavigator } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import ChatListScreen from '~/chat/chatListScreen'
import ChatScreen from '~/chat/chatScreen'
import constants from '~/common/constants'
import { ReduxState } from '~/store/types'
import createNavigationMiddleware from '~/navigation/middleware'
import { ViewStyle, StyleProp, StyleSheet } from 'react-native'
import { Route } from './types'
import LoginScreen from '~/common/LoginScreen'
import UserImage from '~/user/UserImage'
import contactsScreen from '~/contacts/contactsScreen'
import NewChatButton from '~/chat/components/newChatButton'
import NewContactButton from '~/contacts/components/newContactButton'
import NewContactScreen from '~/contacts/newContactScreen'

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
  initialRouteName: 'LoginScreen',
  cardStyle: { backgroundColor: 'white' },
}

const styles = StyleSheet.create({
  headerImage: { marginHorizontal: 10 },
})

export const routes = {
  ChatListScreen: {
    screen: ChatListScreen,
    navigationOptions: () => ({
      title: constants.appName,
      headerLeft: <UserImage size={35} style={styles.headerImage} />,
      headerRight: <NewChatButton />,
    }),
  },
  ChatScreen: {
    screen: ChatScreen,
    navigationOptions: (props: NavigationParams) => ({
      title: props.navigation.state.params.name,
    }),
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: () => ({ title: 'Sign in' }),
  },

  ContactsScreen: {
    screen: contactsScreen,
    navigationOptions: () => ({
      title: 'Contacts',
      headerRight: <NewContactButton />,
    }),
  },
  NewContactScreen: {
    screen: NewContactScreen,
    navigationOptions: () => ({
      title: 'Add contact',
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
