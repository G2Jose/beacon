import React from 'react'
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { isValidEmail } from './utils'

class NewContactScreen extends React.Component {
  state = { text: '' }

  onAdd = () => {
    this.setState({ text: '' })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={text => this.setState({ text })}
          style={styles.input}
          keyboardType="email-address"
          textContentType="emailAddress"
          onSubmitEditing={this.onAdd}
        />
        {isValidEmail(this.state.text) ? (
          <TouchableOpacity onPress={this.onAdd}>
            <Icon name="check" size={23} style={styles.icon} />
          </TouchableOpacity>
        ) : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 35,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 17,
    flex: 1,
    marginHorizontal: 7,
  },
  icon: { paddingRight: 10 },
})

export default NewContactScreen
