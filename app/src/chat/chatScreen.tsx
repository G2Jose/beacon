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
  list: RefObject<FlatList<any>> = React.createRef()

  get data() {
    return [...this.props.chat.messages, 'input']
  }

  renderItem = (item: MessageType & { ours: boolean } | 'input') => {
    if (item === 'input') {
      return (
        <MessageInput
          style={[styles.input, isIphoneX() && styles.inputIphonxX]}
        />
      )
    }
    return <Message message={item.message} ours={item.ours} />
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={[styles.container]}
        behavior="padding"
        keyboardVerticalOffset={78}
      >
        <FlatList
          data={this.data}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={(item, index) => `${index}`}
          ref={this.list}
          onContentSizeChange={() => {
            if (this.list.current) {
              this.list.current.scrollToEnd({ animated: true })
            }
          }}
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10 },
  inputIphonxX: { marginBottom: 25 },
  input: { marginTop: 10, paddingHorizontal: 7 },
})

export default connect(mapStateToProps)(ChatScreen)
