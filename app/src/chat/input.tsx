import React, { Component } from 'react'
import { TextInput, StyleSheet, ViewStyle, StyleProp } from 'react-native'

interface Props {
  style?: StyleProp<ViewStyle>
}

export default class MessageInput extends Component<Props> {
  state = { text: '' }

  render() {
    const { style } = this.props
    return (
      <TextInput
        style={[styles.input, style]}
        onChangeText={text => this.setState({ text })}
        value={this.state.text}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: { height: 40, borderColor: 'gray', borderWidth: 1 },
})
