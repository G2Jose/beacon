import { ReduxState } from '~/store/types'
import { createSelector } from 'reselect'

export const getUser = (state: ReduxState) => {
  if (!state.user) {
    return null
  }

  return state.user
}

export const getProfileImageUrl = createSelector(getUser, user => {
  if (!user) {
    return ''
  }
  return user.image
})
