import { TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { routeTo } from '~/navigation/actions'
import { connect } from 'react-redux'

const mapDispatchToProps = {
  routeToContacts: () => routeTo('ContactsScreen'),
}

type Props = typeof mapDispatchToProps

const NewChatButton = ({ routeToContacts }: Props) => (
  <TouchableOpacity onPress={routeToContacts}>
    <Icon name="edit" size={28} style={styles.headerImage} />
  </TouchableOpacity>
)

export default connect(
  null,
  mapDispatchToProps
)(NewChatButton)

const styles = StyleSheet.create({
  headerImage: { marginHorizontal: 10 },
})
