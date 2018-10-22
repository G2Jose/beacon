import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Chat } from '~/chat/types'
import ProfileImage from '~/profile/profileImage'

interface ChatListItemProps {
  chat: Chat
}

class ChatListItem extends React.Component<ChatListItemProps> {
  render() {
    const { chat } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <ProfileImage size={40} />
        </View>
        <View style={styles.description}>
          <Text style={styles.contact}>{chat.participants[0]}</Text>
          <View style={styles.lastMessage}>
            <Text
              style={[styles.message]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {chat.messages[chat.messages.length - 1].message}
            </Text>
          </View>
        </View>
      </View>
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
    fontWeight: '600',
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

export default ChatListItem
