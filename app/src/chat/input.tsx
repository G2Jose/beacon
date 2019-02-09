import React, { Component } from 'react'
import {
  TextInput,
  StyleSheet,
  ViewStyle,
  StyleProp,
  View,
  TouchableOpacity,
  Text,
} from 'react-native'

interface Props {
  style?: StyleProp<ViewStyle>
  onPress?: (value: string) => void
  onFocus?: () => void
}

export default class MessageInput extends Component<Props> {
  state = { text: '' }

  onPress = () => {
    const value = this.state.text
    this.setState(
      { text: '' },
      () => this.props.onPress && this.props.onPress(value)
    )
  }

  render() {
    const { style, onFocus } = this.props
    return (
      <View style={[styles.container, style]}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          onFocus={onFocus}
        />
        {this.state.text ? (
          <TouchableOpacity onPress={this.onPress}>
            <Text style={styles.icon}>✉️</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    height: 35,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 17,
    flex: 1,
    marginRight: 7,
  },
  icon: { fontSize: 30, paddingRight: 10 },
})
