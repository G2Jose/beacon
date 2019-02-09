import React from 'react'
import ProfileImage from '~/profile/profileImage'
import { connect } from 'react-redux'
import { ReduxState } from '~/store/types'
import { StyleProp, ImageStyle } from 'react-native'
import { getProfileImageUrl } from './selectors'

const mapStateToProps = (state: ReduxState) => ({
  url: getProfileImageUrl(state),
})

type Props = ReturnType<typeof mapStateToProps> & {
  size: number
  style: StyleProp<ImageStyle>
}

const UserImage = ({ url, size, style }: Props) => (
  <ProfileImage source={{ uri: url }} size={size} style={style} />
)

export default connect(mapStateToProps)(UserImage)
