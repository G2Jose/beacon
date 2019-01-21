import React from 'react'
import { connect } from 'react-redux'
import { View, ScrollView } from 'react-native'
import faker from 'faker'
import { ChatList } from '~/chat/types'
import ChatListItem from '~/chat/chatListItem'

const fakeData: ChatList = {
  chats: Array(10)
    .fill(null)
    .map((_, i) => ({
      id: `${i}`,
      participants: [faker.name.findName(), faker.name.findName()],
      messages: [
        { message: faker.lorem.sentence(), date: new Date(), from: '', to: '' },
        { message: faker.lorem.sentence(), date: new Date(), from: '', to: '' },
      ],
    })),
}

const mapStateToProps = () => ({
  chatList: fakeData,
})

type ConnectProps = ReturnType<typeof mapStateToProps>

type ChatListScreenProps = ConnectProps

class ChatListScreen extends React.Component<ChatListScreenProps> {
  render() {
    const {
      chatList: { chats },
    } = this.props

    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View>
            {chats.map((chat, index) => (
              <ChatListItem chat={chat} key={index} />
            ))}
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default connect(mapStateToProps)(ChatListScreen)
