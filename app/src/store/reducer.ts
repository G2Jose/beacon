import { combineReducers } from 'redux'
import chats from '~/chat/reducer'
import navigation from '~/navigation/reducer'

export default combineReducers({
  chats,
  navigation,
})
