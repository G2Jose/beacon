import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Props = {
  message: string
  ours?: boolean
}

const Message = ({ message, ours = true }: Props) => (
  <View style={[styles.cell, ours && styles.ourCell]}>
    <View style={[styles.bubble, ours && styles.ourBubble]}>
      <Text style={[styles.text, ours && styles.ourText]}>{message}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  ourCell: { alignItems: 'flex-end' },
  bubble: {
    width: 300,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 7,
    marginVertical: 3,
    backgroundColor: 'rgb(211,211,216)',
  },
  ourBubble: {
    backgroundColor: 'rgb(40,121,230)',
  },
  text: { fontSize: 17 },
  ourText: {
    color: 'white',
  },
})

export default Message
