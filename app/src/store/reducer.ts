import { combineReducers } from 'redux'
import chats from '~/chat/reducer'
import navigation from '~/navigation/reducer'
import common from '~/common/reducer'
import user from '~/user/reducer'

export default combineReducers({
  chats,
  navigation,
  common,
  user,
})
