import React, { RefObject } from 'react'
import { FlatList, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import faker from 'faker'
import { createId, createMessage } from './factories'
import Message from './message'
import MessageInput from './input'
import { Message as MessageType } from './types'
import { isIphoneX } from '~/common/utils'

const mapStateToProps = () => ({
  chat: {
    participants: [createId(), createId()],
    messages: Array(30)
      .fill(null)
      .map(() => ({ ...createMessage(), ours: faker.random.boolean() })),
    id: createId(),
  },
})

type ChatScreenProps = ReturnType<typeof mapStateToProps>

class ChatScreen extends React.Component<ChatScreenProps> {
  componentDidUpdate(previousProps: ChatScreenProps) {
    if (previousProps.chat.messages !== this.props.chat.messages) {
      this.scrollToBottom()
    }
  }

  list: RefObject<FlatList<any>> = React.createRef()

  get data() {
    return [...this.props.chat.messages, 'input']
  }

  scrollToBottom = () => {
    if (this.list.current) {
      this.list.current.scrollToEnd({ animated: false })
    }
  }

  renderItem = (item: MessageType & { ours: boolean } | 'input') => {
    if (item === 'input') {
      return (
        <MessageInput style={[styles.input]} onFocus={this.scrollToBottom} />
      )
    }
    return <Message message={item.message} ours={item.ours} />
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={[styles.container, isIphoneX() && styles.containerIPhoneX]}
        behavior="padding"
        keyboardVerticalOffset={75}
      >
        <FlatList
          keyboardShouldPersistTaps="always"
          data={this.data}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={(item, index) => `${index}`}
          ref={this.list}
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10, marginBottom: 15 },
  containerIPhoneX: { marginBottom: 25 },
  input: { marginTop: 10, marginBottom: 10, paddingBottom: 10 },
})

export default connect(mapStateToProps)(ChatScreen)
