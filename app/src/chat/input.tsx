import React, { Component } from 'react'
import {
  TextInput,
  StyleSheet,
  ViewStyle,
  StyleProp,
  View,
  Button,
  TouchableOpacity,
  Text,
} from 'react-native'

interface Props {
  style?: StyleProp<ViewStyle>
}

export default class MessageInput extends Component<Props> {
  state = { text: '' }

  render() {
    const { style } = this.props
    return (
      <View style={[styles.container, style]}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.icon}>⬆</Text>
        </TouchableOpacity>
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 7,
    flex: 1,
    marginRight: 7,
  },
  icon: { fontSize: 35 },
})
