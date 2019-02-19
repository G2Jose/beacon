import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
  User,
} from 'react-native-google-signin'
import React from 'react'
import { connect } from 'react-redux'
import { routeTo } from '~/navigation/actions'
import { setUser } from '~/user/actions'
import { View } from 'react-native'
import { GoogleSignInConfig } from './utils'

const mapDispatchToProps = {
  routeTo,
  setUser,
}
type Props = typeof mapDispatchToProps
class LoginScreen extends React.Component<Props> {
  state = { signingIn: false }

  componentDidMount() {
    GoogleSignin.configure(GoogleSignInConfig)
    this.attemptSilentSignIn()
  }

  attemptSilentSignIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn()
    if (isSignedIn) {
      const userInfo = await GoogleSignin.signInSilently()
      this.handlePostSignIn(userInfo)
    }
  }

  signOut = async () => {
    try {
      await GoogleSignin.signOut()
    } catch (error) {
      console.error(error)
    }
  }

  signIn = async () => {
    await this.signOut()
    this.setState({ signingIn: true })
    try {
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()
      this.handlePostSignIn(userInfo)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  handlePostSignIn = async (userInfo: User) => {
    if (!userInfo.serverAuthCode) {
      return null
    }
    const result = await fetch(
      `http://localhost:3000/users/auth/google_oauth2/callback?redirect_uri=&code=${
        userInfo.serverAuthCode
      }`,
      {
        method: 'POST',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
      }
    )

    const user = await result.json()

    if (result.status === 200) {
      this.props.routeTo('ChatListScreen')
      this.props.setUser(user)
    } else {
      this.setState({ signingIn: false })
    }
    return null
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        <GoogleSigninButton
          style={{ width: 312, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.signIn}
          disabled={this.state.signingIn}
        />
      </View>
    )
  }
}

export default connect(
  null,
  mapDispatchToProps
)(LoginScreen)
