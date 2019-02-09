import { NavigationState } from '~/navigation/types'
import { Chat } from '~/chat/types'
import { Common } from '~/common/types'
import { User } from '~/user/types'

export interface ReduxState {
  navigation: NavigationState
  chat: Chat
  common: Common
  user?: User
}
