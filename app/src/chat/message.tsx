import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { DimensionsContext } from '~/LayoutAwareApp'

type Props = {
  message: string
  ours?: boolean
}

const Message = ({ message, ours = true }: Props) => (
  <DimensionsContext.Consumer>
    {dimensions => (
      <View style={[styles.cell, ours && styles.ourCell]}>
        <View
          style={[
            dimensions && { width: dimensions.width * 0.9 },
            styles.bubble,
            ours && styles.ourBubble,
          ]}
        >
          <Text style={[styles.text, ours && styles.ourText]}>{message}</Text>
        </View>
      </View>
    )}
  </DimensionsContext.Consumer>
)

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  ourCell: { alignItems: 'flex-end' },
  bubble: {
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
