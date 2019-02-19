import { TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { routeTo } from '~/navigation/actions'
import { connect } from 'react-redux'

const mapDispatchToProps = {
  routeToNewContact: () => routeTo('NewContactScreen'),
}

type Props = typeof mapDispatchToProps

const NewContactButton = ({ routeToNewContact }: Props) => (
  <TouchableOpacity onPress={routeToNewContact}>
    <Icon name="user-plus" size={23} style={styles.headerImage} />
  </TouchableOpacity>
)

export default connect(
  null,
  mapDispatchToProps
)(NewContactButton)

const styles = StyleSheet.create({
  headerImage: { marginHorizontal: 10 },
})
