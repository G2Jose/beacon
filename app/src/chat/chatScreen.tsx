import React, { RefObject } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import faker from 'faker'
import { createId, createMessage } from './factories'
import Message from './message'

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
  componentDidMount() {
    // @TODO This is weird
    this.timer = setTimeout(() => {
      if (this.list.current) {
        this.list.current.scrollToEnd()
      }
    }, 1000)
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }

  list: RefObject<FlatList<any>> = React.createRef()

  timer?: number = 0

  render() {
    const { chat } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          data={chat.messages}
          renderItem={({ item }) => (
            <Message message={item.message} ours={item.ours} />
          )}
          keyExtractor={(item, index) => `${index}`}
          ref={this.list}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10 },
})

export default connect(mapStateToProps)(ChatScreen)
