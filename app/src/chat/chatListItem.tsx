import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Chat } from '~/chat/types'
import ProfileImage from '~/profile/profileImage'
import { routeTo } from '~/navigation/actions'
import { connect } from 'react-redux'

const mapDispatchToProps = {
  routeToChat: (chat: Chat) => routeTo('ChatScreen', {
      params: { id: chat.id, name: chat.participants[0] },
    }),
}

type ChatListItemProps = {
  chat: Chat
} & typeof mapDispatchToProps

class ChatListItem extends React.Component<ChatListItemProps> {
  render() {
    const { chat, routeToChat } = this.props
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => routeToChat(chat)}
      >
        <View style={styles.image}>
          <ProfileImage size={50} />
        </View>
        <View style={styles.description}>
          <Text style={styles.contact}>{chat.participants[0]}</Text>
          <View style={styles.lastMessage}>
            <Text
              style={[styles.message]}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {chat.messages[chat.messages.length - 1].message}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 5,
    borderBottomColor: '#eaeaea',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  contact: {
    fontWeight: '700',
    fontSize: 17,
  },
  image: {
    paddingRight: 10,
    paddingVertical: 10,
    paddingLeft: 0,
  },
  message: {
    color: 'grey',
    flexWrap: 'wrap',
  },
  description: { flexDirection: 'column', flex: 1 },
  lastMessage: {},
})

export default connect(
  null,
  mapDispatchToProps
)(ChatListItem)
