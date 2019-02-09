import { actionTypes } from './actions'

const defaultState = {
  user: undefined,
}

const common = (state = defaultState, action: Action) => {
  switch (action.type) {
    case actionTypes.USER_SET: {
      return { ...state, ...action.payload }
    }
    default: {
      return state
    }
  }
}

export default common
