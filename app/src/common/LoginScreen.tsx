import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin'
import React from 'react'
import { connect } from 'react-redux'
import { routeTo } from '~/navigation/actions'
import { setUser } from '~/user/actions'
import { View } from 'react-native'

const mapDispatchToProps = {
  routeTo,
  setUser,
}
type Props = typeof mapDispatchToProps
class LoginScreen extends React.Component<Props> {
  state = { signingIn: false }

  componentDidMount() {
    GoogleSignin.configure()
  }

  signIn = async () => {
    this.setState({ signingIn: true })
    try {
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()

      this.setState({ signingIn: false })
      this.props.routeTo('ChatListScreen')
      this.props.setUser(userInfo)
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
