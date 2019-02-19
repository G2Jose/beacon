import React, { Component } from 'react'
import {
  TextInput,
  StyleSheet,
  ViewStyle,
  StyleProp,
  View,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

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
          returnKeyType="send"
          onSubmitEditing={this.onPress}
          blurOnSubmit={false}
        />
        {this.state.text ? (
          <TouchableOpacity onPress={this.onPress}>
            <Icon name="paper-plane" size={23} style={styles.icon} />
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
  icon: { paddingRight: 10 },
})
