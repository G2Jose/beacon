import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ProfileImage from '~/profile/profileImage'
import { connect } from 'react-redux'
import { Contact } from '~/user/types'

const mapDispatchToProps = {}

type ContactItemProps = {
  contact: Contact
} & typeof mapDispatchToProps

class ContactItem extends React.Component<ContactItemProps> {
  render() {
    const { contact } = this.props
    return (
      <TouchableOpacity style={styles.container} onPress={() => {}}>
        <View style={styles.image}>
          <ProfileImage size={30} />
        </View>
        <View style={styles.description}>
          <Text style={styles.contact}>{contact.name}</Text>
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
    fontWeight: '500',
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
)(ContactItem)
