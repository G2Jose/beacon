import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin'
import React from 'react'

class LoginScreen extends React.Component {
  render() {
    return (
      <GoogleSigninButton
        style={{ width: 48, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={this._signIn}
        disabled={this.state.isSigninInProgress}
      />
    )
  }
}
